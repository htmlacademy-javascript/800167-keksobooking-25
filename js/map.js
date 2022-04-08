import { toggleUiState } from './form.js';
import { templatePopup } from './template.js';

const addressField = document.querySelector('#address');
const DEFAULT_COORDS = {
  lat: 35.6895,
  lng: 139.692
};
const DEFAULT_ZOOM = 11;
const COUNT_ADVERTISEMENTS = 10;
const mapSrc = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const mapAttr = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';


const setAddressPosition = (position = DEFAULT_COORDS) => {
  addressField.value = `${position.lat.toFixed(5)} ${position.lng.toFixed(5)}`;
};


const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});
const commonPinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const map = L.map('map-canvas');
const layer = L.layerGroup().addTo(map);

L.tileLayer(mapSrc, { attribution: mapAttr }).addTo(map);

const mainPinMarker = L.marker(
  DEFAULT_COORDS,
  {
    draggable: true,
    icon: mainPinIcon
  },
);

const drawMainPin = () => {
  mainPinMarker.addTo(map);
  mainPinMarker.on('moveend', (evt) => {
    setAddressPosition(evt.target.getLatLng());
  });
};

const resetMainPin = () => {
  mainPinMarker.setLatLng(DEFAULT_COORDS);
  setAddressPosition(DEFAULT_COORDS);
  map.setView(DEFAULT_COORDS, DEFAULT_ZOOM);
  map.closePopup();
};

const drawCommonPins = (pins) => {
  const createMarker = (item) => {
    const commonPinMarker = L.marker(
      item.location,
      {
        icon: commonPinIcon
      },
    );

    commonPinMarker.addTo(layer).bindPopup(templatePopup(item));
  };
  layer.clearLayers();
  pins.slice(0, COUNT_ADVERTISEMENTS).forEach((advert) => {
    createMarker(advert);
  });

};


const drawMap = (adverts) => {
  map.on('load', () => {
    toggleUiState(true);
    setAddressPosition();
  })
    .setView(DEFAULT_COORDS, DEFAULT_ZOOM);

  drawMainPin();
  drawCommonPins(adverts);
};

export { drawMap, setAddressPosition, resetMainPin, drawCommonPins, map };
