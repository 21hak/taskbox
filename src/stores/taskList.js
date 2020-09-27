import { observable } from 'mobx';

const taskList = observable({
  number: 1,
  increase() {
    this.number++;
  },
  decrease() {
    this.number--;
  },
});

export { taskList };


