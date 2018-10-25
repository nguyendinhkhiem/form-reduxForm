import { TestModule } from './TestModule';

const els = document.getElementsByTagName('test');
Array.prototype.forEach.call(els, el => {
  const options = {};
  new TestModule(el, options);
});
