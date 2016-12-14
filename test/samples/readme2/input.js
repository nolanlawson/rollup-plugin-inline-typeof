if (typeof foo === 'undefined' && foo === null) {
  console.log('yolo');
}

if (typeof foo === 'boolean' || typeof foo !== 'function' || typeof foo !== 'undefined') {
  console.log('haha')
}