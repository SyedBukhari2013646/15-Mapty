'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Workout class
class Workout {
  date = new Date();
  id = Date.now() + ''.slice(-10);
  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, lng]
    this.distance = distance; // Distance in km
    this.duration = duration; // Duration in time
  }
}

// Class for running
class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, duration, distance);
    this.cadence = cadence;
    this.calcPace();
  }

  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

// Class for cycling
class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, duration, distance, elevation) {
    super(coords, duration, distance);
    this.elevation = elevation;
    this.calcSpeed();
  }

  calcSpeed() {
    // km / h
    this.speed = this.distance / (this.duration / 60);
  }
}
const run1 = new Running([33.75552, 72.362617], 6, 120, 240);
console.log(run1);

const cycling1 = new Cycling([33.75552, 72.362617], 19, 45, 100);
console.log(cycling1);

/////////////////////////////////////
// ARCHITECTURE APPLICATION

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class App {
  #map;
  #mapEvent;
  #workouts = [];

  constructor() {
    this._getPosition();

    form.addEventListener('submit', this._newWorkout.bind(this));

    inputType.addEventListener('change', this._toogleElevationField);
  }
  _getPosition() {
    console.log(this);
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert("We couldn't get your current position");
        }
      );
  }
  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(`https://www.google.com/maps/place/@${latitude},${longitude}`);
    const coords = [latitude, longitude];
    this.#map = L.map('map').setView(coords, 13);
    console.log(this.#map);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // Handling clicks on map
    this.#map.on('click', this._showForm.bind(this));
  }
  _showForm(mapE) {
    this.#mapEvent = mapE;
    console.log(mapE.latlng);
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _toogleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    const validInput = (...inputs) => inputs.every(inp => Number.isFinite(inp));
    const allPositive = (...inputs) => inputs.every(inp => inp > 0);

    e.preventDefault();
    // Get data from the form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    // If workout running, create a running Object
    if (type === 'running') {
      const cadence = +inputCadence.value;
      // Check if data is valid
      if (
        !validInput(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('Input have to be positive number!');

      workout = new Running([lat, lng], distance, duration, cadence);
    }
    // If workout cycling, create a cycling object
    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      // Check if data is valid
      if (
        !validInput(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert('Input have to be positive number!');

      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    // Add the new object to the workout array
    this.#workouts.push(workout);
    console.log(workout);

    // Render workout on map as a marker
    this.renderWorkoutMarker(workout);
    // Render workout on list

    // Hide form + clear input fields

    inputDistance.value =
      inputCadence.value =
      inputDuration.value =
      inputElevation.value =
        '';
  }

  renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(`${workout.type} workout`)
      .openPopup();
  }
}

const app1 = new App();
const app2 = new App();
const app3 = new App();
const app4 = new App();
const app5 = new App();
const app6 = new App();
const app7 = new App();
const app8 = new App();
const app9 = new App();
const app10 = new App();
const app11 = new App();
const app12 = new App();
const app13 = new App();
const app14 = new App();
const app15 = new App();
const app16 = new App();
const app17 = new App();
const app18 = new App();
const app19 = new App();
const app20 = new App();
const app21 = new App();
const app22 = new App();
const app23 = new App();
const app1 = new App();
const app2 = new App();
const app3 = new App();
const app4 = new App();
const app5 = new App();
const app6 = new App();
const app7 = new App();
const app8 = new App();
const app9 = new App();
const app10 = new App();
const app11 = new App();
const app12 = new App();
const app13 = new App();
const app14 = new App();
const app15 = new App();
const app16 = new App();
const app17 = new App();
const app18 = new App();
const app19 = new App();
const app20 = new App();
const app21 = new App();
const app22 = new App();
const app23 = new App();
const app1 = new App();
const app2 = new App();
const app3 = new App();
const app4 = new App();
const app5 = new App();
const app6 = new App();
const app7 = new App();
const app8 = new App();
const app9 = new App();
const app10 = new App();
const app11 = new App();
const app12 = new App();
const app13 = new App();
const app14 = new App();
const app15 = new App();
const app16 = new App();
const app17 = new App();
const app18 = new App();
const app19 = new App();
const app20 = new App();
const app21 = new App();
const app22 = new App();
const app23 = new App();
const app1 = new App();
const app2 = new App();
const app3 = new App();
const app4 = new App();
const app5 = new App();
const app6 = new App();
const app7 = new App();
const app8 = new App();
const app9 = new App();
const app10 = new App();
const app11 = new App();
const app12 = new App();
const app13 = new App();
const app14 = new App();
const app15 = new App();
const app16 = new App();
const app17 = new App();
const app18 = new App();
const app19 = new App();
const app20 = new App();
const app21 = new App();
const app22 = new App();
const app23 = new App();
const app1 = new App();
const app2 = new App();
const app3 = new App();
const app4 = new App();
const app5 = new App();
const app6 = new App();
const app7 = new App();
const app8 = new App();
const app9 = new App();
const app10 = new App();
const app11 = new App();
const app12 = new App();
const app13 = new App();
const app14 = new App();
const app15 = new App();
const app16 = new App();
const app17 = new App();
const app18 = new App();
const app19 = new App();
const app20 = new App();
const app21 = new App();
const app22 = new App();
const app23 = new App();
const app1 = new App();
const app2 = new App();
const app3 = new App();
const app4 = new App();
const app5 = new App();
