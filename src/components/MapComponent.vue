<template>
  <div id="map"></div>
</template>

<script>
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

export default {
  props: {
    tourismData: {
      type: Object,
      required: true,
    },
  },
  watch: {
    tourismData() {
      this.drawMap();
    },
  },
  inject: [
    'filterData',
  ],
  methods: {
    drawMap() {
      mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_TOKEN;

      const { PositionLon, PositionLat } = this.tourismData.Position;
      const tourismPosition = [
        PositionLon,
        PositionLat,
      ];

      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/calon719/cl1dlmiyt003j14pbgaypf6m3',
        center: tourismPosition,
        zoom: 15,
      });

      map.on('load', () => {
        map.addSource('places', {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                properties: {
                  description:
                    `<strong>${this.filterData(this.tourismData, 'Name')}</strong><p>${this.tourismData.Address}</p>`,
                },
                geometry: {
                  type: 'Point',
                  coordinates: tourismPosition,
                },
              },
            ],
          },
        });
        map.addLayer({
          id: 'places',
          type: 'circle',
          source: 'places',
          paint: {
            'circle-color': '#000000',
            'circle-radius': 6,
            'circle-stroke-width': 2,
            'circle-stroke-color': '#ffffff',
          },
        });

        const popup = new mapboxgl.Popup({
          closeButton: false,
          closeOnClick: false,
        });

        map.on('mouseenter', 'places', (e) => {
          map.getCanvas().style.cursor = 'pointer';

          const coordinates = e.features[0].geometry.coordinates.slice();
          const { description } = e.features[0].properties;

          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
          }

          popup.setLngLat(coordinates).setHTML(description).addTo(map);
        });

        map.on('mouseleave', 'places', () => {
          map.getCanvas().style.cursor = '';
          popup.remove();
        });

        new mapboxgl.Marker({
          color: '#ed0000',
        }).setLngLat(tourismPosition).addTo(map);
      });
    },
  },
  mounted() {
    this.drawMap();
  },
};
</script>
