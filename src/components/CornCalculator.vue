<template>
	<div>
		<div class='heading-div'>
			<span>Map name: </span>
			<span class='heading-2'>{{map_name}}</span>
		</div>

		<div class='heading-div'>
			<span>Field area surface: </span>
			<span class='heading-2'>{{area_surface_converted}} {{metric_desc}}</span>
		</div>
		<form class="form-horizontal">
			<div class="form-group">
				<div class="col-md-6 col-md-offset-3">
					<strong>Ears per plant:</strong>
					<input type='number' v-model.number="ears_per_plant" v-on:change="calculateTotalYield" class='form-control'/>
				</div>
			</div>
			<div class="form-group">
				<div class="col-md-6 col-md-offset-3">
					<strong>Rows count ear:</strong>
					<input type='number' v-model.number="rows_count_ear" v-on:change="calculateTotalYield" class='form-control'/>
				</div>
			</div>
			<div class="form-group">
				<div class="col-md-6 col-md-offset-3">
					<strong>Grains per row:</strong>
					<input type='number' v-model.number="grains_per_row" v-on:change="calculateTotalYield" class='form-control'/>
				</div>
			</div>
			<div class="form-group">
				<div class="col-md-6 col-md-offset-3">
					<strong>Grains weight:</strong>
					<input type='number' v-model.number="grains_weight" v-on:change="calculateTotalYield" class='form-control'/>
				</div>
			</div>
			<div class="form-group">
				<div class="col-md-6 col-md-offset-3">
					<strong>Grains moisture:</strong>
					<input type='number' v-model.number="grains_moisture" v-on:change="calculateTotalYield" class='form-control'/>
				</div>
			</div>
			<div class="form-group">
				<div class="col-md-6 col-md-offset-3">
					<strong>Plants density:</strong>
					<input disabled type='text' v-model.number="plants_density" class='form-control'/>
				</div>
			</div>
			<div class="form-group">
				<div class="col-sm-3 col-md-offset-3">
					<label>Choose</label>
					<select v-model="metric" class="form-control" v-on:change="calculateAverageYield">
						<option disabled value="">Choose</option>
						<option  v-for='(choice, key) in choices' v-bind:value='key' :selected="metric == choice">{{choice}}</option>
					</select>
				</div>
				<div class="col-sm-3">
					<label>Yield per unit</label>
					<input disabled type='text' v-model.number="yield_per_unit" class='form-control'/>
				</div>
			</div>
			<div class="form-group">
				<div class="col-md-6 col-md-offset-3">
					<strong>Total yield:</strong>
					<input disabled type='text' v-model.number="total_yield" class='form-control'/>
				</div>
			</div>
		</form>
	</div>
</template>
<style scoped>
.heading-2{
	font-size: 20px;
	font-weight: 5px;
}
.heading-div{
	margin-bottom: 20px;
}
.form-group.c1, .form-group.c2{
	display:inline-block;
	width:48%;
	vertical-align: top;
}
</style>
<script type="text/javascript">
	export default{
		data(){
			return{
				ears_per_plant:0,
				rows_count_ear:0,
				grains_per_row:0,
				grains_weight:0,
				grains_moisture:0,
				plants_density:0,
				total_yield:0,
				yield_per_unit:0,
				area_surface:0,
				area_surface_converted:0,
				map_name:"",
				metrics: {"1":4046.46, "2":10000},
				metric: "1",
				choices: {"1": 't/ac', "2": 't/ha'},
				metric_desc_options: {"1":"ac", "2":"ha"},
				metric_desc:""
			}
		},
		methods:{
			calculateTotalYield(){
				var calculatedValue = (this.ears_per_plant*this.rows_count_ear*this.grains_per_row*this.plants_density)/1000*this.grains_weight/1000000;
				this.total_yield = calculatedValue.toFixed(2);
				this.yield_per_unit = (this.total_yield/this.area_surface*this.metrics[this.metric]).toFixed(2);
			},
			calculateAverageYield(){
				console.log(this.total_yield/this.area_surface);
				this.area_surface_converted = (this.area_surface/this.metrics[this.metric]).toFixed(2);
				this.yield_per_unit = (this.total_yield/this.area_surface*this.metrics[this.metric]).toFixed(2);
				this.metric_desc = this.metric_desc_options[this.metric];
			}
		},
		created: function(){
			axios.get('/static/tool_data.json').then((response) => {
				this.metric = response.data.tool_data.metric;
				this.metric_desc = this.metric_desc_options[this.metric];
				this.tool_data = response.data.tool_data;
				this.plants_density = response.data.tool_data.plants_density;
				this.area_surface = response.data.tool_data.area_surface;
				this.area_surface_converted = (response.data.tool_data.area_surface/this.metrics[this.metric]).toFixed(2);
				this.map_name = response.data.tool_data.map_name;
				
				
			})
		}
		
	}
</script>