import * as React from 'react';
import { BulletType } from '../models/BulletType';
import { LogItem } from '../models/LogItem';

interface ITasksProps {
  tasks: LogItem[];
}

export class Tasks extends React.Component<ITasksProps> {
  public render() {
    return (
      <div className="log">
        {this.props.tasks.filter(t => t.content.length > 0).map((t, i) => (
          <div className="log-itemContainer" key={`task-${t.created}-${i}`}>
            <span className="log-type">
              <span>{BulletType.Task}</span>
              <span>&nbsp;</span>
            </span>
            <span className="log-item log-item--task">{t.content}</span>
          </div>
        ))}
      </div>
    );
  }
}
