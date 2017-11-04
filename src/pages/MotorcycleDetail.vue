<template>
  <div class="hello">
    <h1>lowside.io</h1>
    {{ $route.params.slug }}
    <div>{{this.error.message}}</div>

    {{ this.loading ? 'loading' : 'not loading' }}

    {{ selectedSpec }}
    <div v-if="specs && specs[selectedSpec]">
      <Bore v-bind:data="specs[selectedSpec].bore" />
      <Cc v-bind:data="specs[selectedSpec].cc" />
      <Clutch v-bind:data="specs[selectedSpec].clutch" />
      <Cooling v-bind:data="specs[selectedSpec].cooling" />
      <DryWeight v-bind:data="specs[selectedSpec].dryWeight" />
      <EngineType v-bind:data="specs[selectedSpec].engineType" />
      <FrameType v-bind:data="specs[selectedSpec].frameType" />
      <FrontBrakes v-bind:data="specs[selectedSpec].frontBrakes" />
      <FrontBrakesDiameter v-bind:data="specs[selectedSpec].frontBrakesDiameter" />
      <FrontSuspension v-bind:data="specs[selectedSpec].frontSuspension" />
      <FrontWheelTravel v-bind:data="specs[selectedSpec].frontWheelTravel" />
      <FuelCapacity v-bind:data="specs[selectedSpec].fuelCapacity" />
      <FuelControl v-bind:data="specs[selectedSpec].fuelControl" />
      <FuelSystem v-bind:data="specs[selectedSpec].fuelSystem" />
      <Gearbox v-bind:data="specs[selectedSpec].gearbox" />
      <Ignition v-bind:data="specs[selectedSpec].ignition" />
      <Power v-bind:data="specs[selectedSpec].power" />
      <RearBrakes v-bind:data="specs[selectedSpec].rearBrakes" />
      <RearBrakesDiameter v-bind:data="specs[selectedSpec].rearBrakesDiameter" />
      <RearSuspension v-bind:data="specs[selectedSpec].rearSuspension" />
      <RearWheelTravel v-bind:data="specs[selectedSpec].rearWheelTravel" />
      <SeatHeight v-bind:data="specs[selectedSpec].seatHeight" />
      <Starter v-bind:data="specs[selectedSpec].starter" />
      <Stroke v-bind:data="specs[selectedSpec].stroke" />
      <Transmission v-bind:data="specs[selectedSpec].transmission" />
      <Wheelbase v-bind:data="specs[selectedSpec].wheelbase" />
      <Year v-bind:data="specs[selectedSpec].year" />
      <Compression v-bind:data="specs[selectedSpec].compression" />
      <GroundClearence v-bind:data="specs[selectedSpec].groundClearence" />
      <Lubrification v-bind:data="specs[selectedSpec].lubrification" />
      <OverallHeight v-bind:data="specs[selectedSpec].overallHeight" />
      <OverallLength v-bind:data="specs[selectedSpec].overallLength" />
      <OverallWidth v-bind:data="specs[selectedSpec].overallWidth" />
      <PowerWeight v-bind:data="specs[selectedSpec].powerWeight" />
      <Price v-bind:data="specs[selectedSpec].price" />
      <RearTyre v-bind:data="specs[selectedSpec].rearTyre" />
      <Torque v-bind:data="specs[selectedSpec].torque" />
    </div>

  </div>
</template>

<script>
import axios from 'axios';

import {
  DryWeight,
  Cooling,
  Compression,
  Clutch,
  Cc,
  Bore,
  EngineType,
  FrameType,
  FrontBrakes,
  FrontBrakesDiameter,
  FrontSuspension,
  FrontWheelTravel,
  FuelCapacity,
  FuelControl,
  FuelSystem,
  Gearbox,
  Ignition,
  Power,
  RearBrakes,
  RearBrakesDiameter,
  RearSuspension,
  RearWheelTravel,
  SeatHeight,
  Starter,
  Stroke,
  Transmission,
  Wheelbase,
  Year,
  GroundClearence,
  Lubrification,
  OverallHeight,
  OverallLength,
  OverallWidth,
  PowerWeight,
  Price,
  RearTyre,
  Torque,
} from '@/molecules';


export default {
  name: 'MotorcycleDetail',
  components: {
    Bore,
    Cc,
    Clutch,
    Compression,
    Cooling,
    DryWeight,
    EngineType,
    FrameType,
    FrontBrakes,
    FrontBrakesDiameter,
    FrontSuspension,
    FrontWheelTravel,
    FuelCapacity,
    FuelControl,
    FuelSystem,
    Gearbox,
    Ignition,
    Power,
    RearBrakes,
    RearBrakesDiameter,
    RearSuspension,
    RearWheelTravel,
    SeatHeight,
    Starter,
    Stroke,
    Transmission,
    Wheelbase,
    Year,
    GroundClearence,
    Lubrification,
    OverallHeight,
    OverallLength,
    OverallWidth,
    PowerWeight,
    Price,
    RearTyre,
    Torque,
  },
  created() {
    this.fetchData();
  },
  data() {
    return {
      loading: true,
      error: false,

      specs: null,
      selectedSpec: 0,
    };
  },
  methods: {
    fetchData() {
      this.loading = true;
      this.data = null;

      axios.get(`${process.env.API_URL}/motorcycles/slug/${this.$route.params.slug}`)
      .then((response) => {
        console.log('yay', response.data.id);
        axios.get(`${process.env.API_URL}/motorcycles-specs/${response.data.id}`)
        .then((specsResponse) => {
          this.loading = false;
          this.specs = specsResponse.data;
          console.log('specs', this.specs[0]);
        });
      })
      .catch((e) => {
        this.loading = false;
        this.error = e;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  color: #f6f7f8;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
