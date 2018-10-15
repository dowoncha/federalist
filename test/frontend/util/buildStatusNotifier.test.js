import { expect } from 'chai';
import { spy } from 'sinon';
import BuildStatusNotifier from '../../../frontend/util/buildStatusNotifier';

describe('listen', () => {
  it('does not throw error by default', (done) => {
    const msg = { state: 'state', owner: 'owner', repository: 'repository', branch: 'branch' };
    const notifySpy = spy(BuildStatusNotifier, 'notify');
    const listenSpy = spy(BuildStatusNotifier, 'listen');

    expect(listenSpy.called).to.be.false;
    expect(BuildStatusNotifier.listening).to.be.undefined;
    BuildStatusNotifier.listen();
    expect(BuildStatusNotifier.listening).to.be.true;
    expect(listenSpy.calledOnce).to.be.true;
    BuildStatusNotifier.listen();
    expect(listenSpy.calledTwice).to.be.true;

    expect(notifySpy.called).to.be.false;
    BuildStatusNotifier.notify(msg);
    expect(notifySpy.calledOnce).to.be.true;
    msg.state = 'error';
    BuildStatusNotifier.notify(msg);
    expect(notifySpy.calledTwice).to.be.true;
    msg.state = 'processing';
    BuildStatusNotifier.notify(msg);
    expect(notifySpy.calledThrice).to.be.true;
    done();
  });
});