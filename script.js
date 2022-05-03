const counters = document.querySelectorAll('.counter');

// loop through the counters
counters.forEach(counter => {
  // start counter text at 0
  counter.innerText = '0';

  // get the data target attribute, the + changes it from a string value to a number value
  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    // console.log(typeof target, target)
    // get the number
    const c = +counter.innerText;

    // increment number upwards divided by 250
    const increment = target / 250
    // console.log(increment)

    // if counter is less than target, keep incrementing. Math.ceil rounds the num up
    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`
      // setTimeout to wait 1 millisec to keep running the counter by the increment
      setTimeout(updateCounter, 1);
      // else stop at target num
    } else {
      counter.innerText = target;
    }
  }

  updateCounter();
});