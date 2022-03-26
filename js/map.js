import { COUNT_ADVERTISEMENTS } from './data.js';
import { toggleUiState } from './form.js';
import { publishAds } from './mock.js';
import { templatePopup } from './template.js';

const addressField = document.querySelector('#address');
const defaultCoords = {
  lat: 35.6895,
  lng: 139.692
};
const defaultZoom = 10;
const mapSrc = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const mapAttr = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const adverts = publishAds(COUNT_ADVERTISEMENTS);


const setAddressPosition = (position = defaultCoords) => {
  addressField.value = `${position.lat.toFixed(5)} ${position.lng.toFixed(5)}`;
};


const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});
const commonPinIcon = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});


const drawMainPin = (map) => {
  const mainPinMarker = L.marker(
    defaultCoords,
    {
      draggable: true,
      icon: mainPinIcon
    },
  );
  mainPinMarker.addTo(map);
  mainPinMarker.on('moveend', (evt) => {
    setAddressPosition(evt.target.getLatLng());
  });
};

const drawCommonPins = (map) => {

  const createMarker = (item) => {
    const commonPinMarker = L.marker(item.location
      ,
      {
        draggable: true,
        icon: commonPinIcon
      },
    );

    commonPinMarker.addTo(map).bindPopup(templatePopup(item));
  };

  adverts.forEach((advert) => {
    createMarker(advert);
  });

};


const drawMap = () => {
  const map = L.map('map-canvas')
    .on('load', () => {
      toggleUiState(true);
      setAddressPosition();
    })
    .setView(defaultCoords, defaultZoom);

  L.tileLayer(mapSrc,{ attribution: mapAttr }).addTo(map);

  drawMainPin(map);
  drawCommonPins(map);
};

export { drawMap };
