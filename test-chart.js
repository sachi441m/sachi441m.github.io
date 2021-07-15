// var linelabels = ['January', 'February', 'March', 'April', 'May', 'June'];

// var linedata = {
//     labels: linelabels,
//     datasets: [{
//         label: '初めてのグラフ用データセット',
//         borderColor: 'rgb(255, 99, 132)',
//         backgroundColor: 'rgb(255, 100, 130)',
//         data: [0, 10, 15, 3, 60, 10],
//     }]
// };

// var lineconfig = {
//     type: 'line',
//     linedata,
//     options: {},
// };

// var linechart = new Chart(
//     document.getElementById('lineChart'),
//     lineconfig,
// );


const piedata = {
    pielabels: [
      'YES',
      'NO',
      'The Others'
    ],
    Datasets: [{
      pielabel: 'My First piechart',
      piedata: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };

  const pieconfig = {
    type: 'pie',
    data: data,
  };

  var piechart = new Chart(
    // document.getElementById('pieChart'),
    $('#pieChart'),
    pieconfig,
);