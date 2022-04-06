<template>
  <div>
    <h1>Table view</h1>
    <table align="center">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tr v-for="array in array" :key="array.id">
          <td>{{ array.Name }}</td>
          <td>{{ array.Email }}</td>
          <td>{{ array.Phone }}</td>
        </tr>
      <tbody>
      </tbody>
    </table>
  </div>
</template>
 <script>
export default {
  name: "GoviND",
  data() {
    return {
      array: [
        {
          Name: "govind",
          Email: "govindkota9010@gmail.com",
          Phone: 5555555555,
        },
        { Name: "kota", Email: "govind.kota@gmail.com", Phone: 222222222 },
        { Name: "srinu", Email: "srinukota1@gmail.com", Phone: 444444444 },
      ],
    };
  },
};
</script>
                