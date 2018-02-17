// @flow
import * as React from 'react';
import { css } from 'emotion';
import IconFolder from 'react-icons/md/folder';

export const FolderTH = css`
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: #5bc0de;
    color: white;
  }
`;

type Props = {|
  path: string,
  loadPath: string => void,
|};

export class Folder extends React.PureComponent<Props> {
  clickHandle = this.clickHandle.bind(this);
  clickHandle() {
    this.props.loadPath(this.props.path);
  }

  render() {
    const parts = this.props.path.split('/');
    const name = parts[parts.length - 2];

    return (
      <tr>
        <th className={FolderTH} colSpan={2} onClick={this.clickHandle}>
          <IconFolder /> {name}
        </th>
      </tr>
    );
  }
}
