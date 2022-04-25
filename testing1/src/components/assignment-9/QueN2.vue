<template>
    <div>
       <b-card v-for="data in table_data" :key="data.name" >
          Name: {{data.name}}<br>
          Description: {{data.description}}<br>
          Yearsofexperience: {{data.Yearsofexperience}}<br>
          Location: {{data.Location}}
          </b-card>
    </div>
</template>
<script>
export default {
    name:"QueN2",
    data() {
        return{
            table_data : [{ "name" :" Agile CRM" , "description" :" A company of excellence",
                    "Yearsofexperience":"12", "Location":"Hyderabad"}]
        }
    },
}
</script>
