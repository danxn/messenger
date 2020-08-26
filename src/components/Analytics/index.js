import { std } from 'mathjs';
import React, { Component } from 'react';
import './index.css';

class Analytics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wsconnection: false,
      startId: 0,
      currentId: 0,
      valuesQty: 0,
      valuesSize: 0,
      valuesSizeUnits: 'bytes',
      omitedValuesQty: 0,
      statMean: 0,
      statMedian: 0,
      statModa: [],
      statStD: 0,
      statTime: 0,
      statCalcHold: false,
    };

    this.WS = null;
    this.values = [];
    this.omittedValues = [];

    this.manageWSConnection = this.manageWSConnection.bind(this);
    this.connect = this.connect.bind(this);
    this.disconnect = this.disconnect.bind(this);
    this.calculateStat = this.calculateStat.bind(this);
  }

  manageWSConnection() {
    if (this.state.wsconnection) {
      this.setState({ wsconnection: false }, () => this.disconnect());
    } else {
      this.setState({ wsconnection: true }, () => this.connect());
    }
  }

  connect() {
    console.log('Connecting to wss://trade.trademux.net');
    this.WS = new WebSocket('wss://trade.trademux.net:8800/?password=1234');
    this.WS.onopen = () => {
      console.log('connected');
    };

    this.WS.onmessage = (evt) => {
      // Get WS message data
      const message = JSON.parse(evt.data);

      // Push new value to data array (not to the state, because it requires immutable operation which is too heavy for memory)
      this.values.push(message.value);

      // Check for missed values and save them to separate array
      if (this.state.currentId === 0) {
        this.setState({ currentId: message.id });
      } else {
        if (message.id - 1 !== this.state.currentId) {
          for (let i = this.state.currentId + 1; i < message.id; i++) {
            this.omittedValues.push(i);
          }
        }
        this.setState({
          omitedValuesQty: this.omittedValues.length,
          currentId: message.id,
        });
      }

      // Calculate values quantity and size
      let vqty = this.values.length;
      let vsize = vqty * 4;
      let units = 'bytes';
      if (vsize >= 1024 && vqty < 1048576) {
        vsize = Math.round((vsize / 1024) * 10) / 10;
        units = 'KB';
      }
      if (vsize >= 1048576) {
        vsize = Math.round((vsize / 1048576) * 10) / 10;
        units = 'MB';
      }
      this.setState({
        valuesQty: this.values.length,
        valuesSize: vsize,
        valuesSizeUnits: units,
      });
    };

    this.WS.onclose = () => {
      console.log('disconnected');
    };
  }

  disconnect() {
    this.WS.close();
    console.log('[VALUES QTY]', this.values.length);
    console.log('[VALUES]', this.values);
    console.log('[LOST VALUES]', this.omittedValues);
    this.date = 0;
  }

  calculateStat() {
    if (!this.values.length) return;
    let t = Date.now();
    this.setState({ statCalcHold: true }, () => {
      this.setState(
        {
          statMean: this.statMean(this.values),
          statMedian: this.statMedian(this.values),
          statModa: this.statModa(this.values),
          statStD: this.statStD(this.values),
        },
        () => {
          this.setState({ statTime: Date.now() - t, statCalcHold: false });
        }
      );
    });
  }

  statMean(values) {
    let total = 0,
      i;

    for (i = 0; i < values.length; i += 1) {
      total += values[i];
    }
    return total / values.length;
  }

  statMedian(values) {
    let median = 0,
      numsLen = values.length;
    values.sort();

    if (numsLen % 2 === 0) {
      median = (values[numsLen / 2 - 1] + values[numsLen / 2]) / 2;
    } else {
      median = values[(numsLen - 1) / 2];
    }

    return median;
  }

  statModa(values) {
    let modes = [],
      count = [],
      i,
      value,
      maxIndex = 0;

    for (i = 0; i < values.length; i += 1) {
      value = values[i];
      count[value] = (count[value] || 0) + 1;
      if (count[value] > maxIndex) {
        maxIndex = count[value];
      }
    }

    for (i in count)
      if (count.hasOwnProperty(i)) {
        if (count[i] === maxIndex) {
          modes.push(Number(i));
        }
      }

    return modes;
  }

  statStD(values) {
    return std(values);
  }

  render() {
    return (
      <div className="task-1">
        <h1>Задание 1</h1>
        <p>
          Создать веб-приложение, которое максимально быстро считает
          статистические параметры по котировками с биржи.
        </p>
        <div className="dataReceiver">
          <div className="control">
            <button
              className="startConnection"
              onClick={this.manageWSConnection}
            >
              {this.state.wsconnection ? 'STOP' : 'START'}
            </button>
          </div>
          <div className="qty">
            <span className="label">Получено котировок: </span>
            <span className="value">{this.state.valuesQty}</span>
          </div>
          <div className="qty">
            <span className="label">Потеряно котировок: </span>
            <span className="value">{this.state.omitedValuesQty}</span>
          </div>
          <div className="vol">
            <span className="label bottom">Объем данных: </span>
            <span className="value bottom">
              {this.state.valuesSize} {this.state.valuesSizeUnits}
            </span>
          </div>
        </div>
        <div className="statCalculator">
          <div className="control">
            <button
              className="startConnection"
              onClick={this.calculateStat}
              disabled={this.state.statCalcHold}
            >
              Статистика
            </button>
          </div>
          <div className="mean">
            <span className="label">Среднее: </span>
            <span className="value">{this.state.statMean}</span>
          </div>
          <div className="median">
            <span className="label">Медиана: </span>
            <span className="value">{this.state.statMedian}</span>
          </div>
          <div className="moda">
            <span className="label">Мода: </span>
            <span className="value">[{this.state.statModa.join(', ')}]</span>
          </div>
          <div className="std">
            <span className="label">Стандартное отклонение: </span>
            <span className="value">{this.state.statStD}</span>
          </div>
          <div className="std">
            <span className="label bottom">Время вычисления: </span>
            <span className="value bottom">{this.state.statTime} мс</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Analytics;
