<template>
    <div class="title m-1">
        <svg height="46" width="46" class="star">
          <defs>
            <pattern id="neutralStripe" width="200" height="200" patternTransform="rotate(0 0 0)" patternUnits="userSpaceOnUse">
              <rect stroke="none" fill="white" x="0" y="0" width="200" height="100"></rect>
              <rect stroke="none" fill="red" x="0" y="30" width="200" height="100"></rect>
            </pattern>
          </defs>
          <polygon points="
          27.781,1.323 
          33.995,21.582 
          54.240,21.535 
          37.835,34.009 
          44.133,54.240 
          27.781,41.690 
          11.429,54.240 
          17.727,34.009 
          1.323,21.535 
          21.567,21.582" style="stroke-width:2;fill-rule:nonzero;"  transform="scale(0.7)"/>
          <text v-if="card.ops > 0" style="font:Arial;font-size:32px;font-weight:bold;stroke-width:1px;" transform="translate(10,34)">{{ card.ops }}</text>
          Sorry, your browser does not support inline SVG.
        </svg>
          <span>{{ card.name }}</span>
      </div>
</template>

<script>
export default {
  name: 'TSCardTitle',
  props: {
    card: Object
  },
}
</script>

<style scoped>
  div.ts-card svg { display:inline-block; margin-top:-10px; margin-bottom:-10px; }
  div.ts-card.ussr svg.star { fill:red; stroke:yellow; }
  div.ts-card.ussr text { fill:white; stroke:black; }
  div.ts-card.usa svg.star { fill: white; stroke: blue; }
  div.ts-card.usa text { fill:black; stroke:white; }
  div.ts-card.neutral svg.star { fill:url(#neutralStripe);stroke:black; }
  div.ts-card.neutral text { fill:black; stroke:white; }
  div.title { display:inline-block; margin-top:5px; margin-bottom:5px; border:1px solid black; padding-right:5px; width:calc(100% - 10px)}
  div.ts-card div.title { color: white; }
  div.ts-card.early div.title { background-color:rgb(0, 171, 202); }
  div.ts-card.mid div.title { background-color:rgb(0,119,139); }
  div.ts-card.late div.title { background-color:rgb(0,79,92); }
</style>