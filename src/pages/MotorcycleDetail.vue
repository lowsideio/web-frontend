<template>
  <div class="container">
    <div>{{this.error.message}}</div>

    {{ this.loading ? 'loading' : '' }}

    <div v-if="specs && specs[selectedSpec]">

      <div>
        <h2 class="model">{{ model }}</h2>
        <Year v-bind:data="specs[selectedSpec].year" />
      </div>

      <hr />
      <div style="text-align:center">
        <Cc v-bind:data="specs[selectedSpec].cc" />
        <Power v-bind:data="specs[selectedSpec].power" />
        <DryWeight v-bind:data="specs[selectedSpec].dryWeight" />
      </div>
      <hr />
      <div>
        <Cooling v-bind:data="specs[selectedSpec].cooling" />
      </div>
      <hr />
      <div style="text-align:center">
        <Gearbox v-bind:data="specs[selectedSpec].gearbox" />
        <Transmission v-bind:data="specs[selectedSpec].transmission" />
      </div>
      <hr />
      <div>
        <Starter v-bind:data="specs[selectedSpec].starter" />
      </div>
      <hr />
      <div>
        <FuelCapacity v-bind:data="specs[selectedSpec].fuelCapacity" />
        <FuelSystem v-bind:data="specs[selectedSpec].fuelSystem" />
      </div>
      <hr />
      <div>
        <GroundClearence v-bind:data="specs[selectedSpec].groundClearence" />
      </div>
      <hr />

      <table>
        <tr>
          <th>x</th>
          <th>value</th>
        </tr>
        <Bore v-bind:data="specs[selectedSpec].bore" />
        <Clutch v-bind:data="specs[selectedSpec].clutch" />
        <EngineType v-bind:data="specs[selectedSpec].engineType" />
        <FrameType v-bind:data="specs[selectedSpec].frameType" />
        <FrontBrakes v-bind:data="specs[selectedSpec].frontBrakes" />
        <FrontBrakesDiameter v-bind:data="specs[selectedSpec].frontBrakesDiameter" />
        <FrontSuspension v-bind:data="specs[selectedSpec].frontSuspension" />
        <FrontWheelTravel v-bind:data="specs[selectedSpec].frontWheelTravel" />
        <FuelControl v-bind:data="specs[selectedSpec].fuelControl" />
        <Ignition v-bind:data="specs[selectedSpec].ignition" />
        <RearBrakes v-bind:data="specs[selectedSpec].rearBrakes" />
        <RearBrakesDiameter v-bind:data="specs[selectedSpec].rearBrakesDiameter" />
        <RearSuspension v-bind:data="specs[selectedSpec].rearSuspension" />
        <RearWheelTravel v-bind:data="specs[selectedSpec].rearWheelTravel" />
        <SeatHeight v-bind:data="specs[selectedSpec].seatHeight" />
        <Stroke v-bind:data="specs[selectedSpec].stroke" />
        <Wheelbase v-bind:data="specs[selectedSpec].wheelbase" />
        <Compression v-bind:data="specs[selectedSpec].compression" />
        <Lubrification v-bind:data="specs[selectedSpec].lubrification" />
        <OverallHeight v-bind:data="specs[selectedSpec].overallHeight" />
        <OverallLength v-bind:data="specs[selectedSpec].overallLength" />
        <OverallWidth v-bind:data="specs[selectedSpec].overallWidth" />
        <PowerWeight v-bind:data="specs[selectedSpec].powerWeight" />
        <Price v-bind:data="specs[selectedSpec].price" />
        <RearTyre v-bind:data="specs[selectedSpec].rearTyre" />
        <Torque v-bind:data="specs[selectedSpec].torque" />
      </table>
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
        this.model = response.data.model;
        axios.get(`${process.env.API_URL}/motorcycles-specs/${response.data.id}`)
        .then((specsResponse) => {
          this.loading = false;
          this.specs = specsResponse.data;
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

<style scoped>

* {
  color: #f6f7f8;
}

.container {
  max-width: 1080px;
  margin: 0 auto;
  text-align: left;
}

.model {
  text-align: center;
}

</style>
