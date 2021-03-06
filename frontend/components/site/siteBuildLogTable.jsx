import React from 'react';
import PropTypes from 'prop-types';

import { BUILD_LOG } from '../../propTypes';

function SiteBuildLogTable({ buildLogs }) {
  return (
    <table className="usa-table-borderless log-table log-table__site-build-log table-full-width">
      <tbody className="log-data">
        {buildLogs.map((log => (
          <tr key={log.id}>
            <td>
              <pre className="log-source-header">
                <a name={`${log.source}-${log.id}`}>{log.source}</a>
              </pre>
              <pre>
                {log.output}
              </pre>
            </td>
          </tr>
        )))}
      </tbody>
    </table>
  );
}

SiteBuildLogTable.propTypes = {
  buildLogs: PropTypes.arrayOf(BUILD_LOG).isRequired,
};

export default SiteBuildLogTable;
