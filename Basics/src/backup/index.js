import sum from './sum';
import './image_viewer'; // no export in that file, so we can simply import it ad run

const total = sum(10, 5);
console.log(total);
