const data = {
  points: [
    {
      id: 1,
      geocode: [12.9784, 77.6408],
      name: "Indiranagar",
    },
    {
      id: 2,
      geocode: [12.9308, 77.5838],
      name: "Jayanagar",
    },
    {
      id: 3,
      geocode: [12.9141, 74.856],
      name: "Mangalore",
    },
    {
      id: 4,
      geocode: [24.5775, 77.7318],
      name: "Ashok Nagar",
    },
    {
      id: 5,
      geocode: [12.857729201125608, 77.43039759633234],
      name: "Sheshagiri Halli",
    },
    {
      id: 6,
      geocode: [12.841517697618045, 77.47438111251228],
      name: "Hoskote",
    },
    {
      id: 7,
      geocode: [12.806999402138075, 77.46258065695184],
      name: "Ramanagara Taluk",
    },
    {
      id: 8,
      geocode: [12.804384186944006, 77.50656417313292],
      name: "Kaggallipura",
    },
  ],
  polygons: [
    {
      id: 1,
      coordinates: [
        [12.9716, 77.5946],
        [12.9716, 77.6179],
        [12.9629, 77.6179],
        [12.9129, 77.5846],
      ],
      area: "Shanti Nagar",
      details:
        "Shakambhari, a form of the goddess Parvati, is the centre of attraction in the temple.  ",
    },
    {
      id: 2,
      coordinates: [
        [12.997688141250322, 77.52557797259522],
        [12.995969637962162, 77.523513409021],
        [12.992661159526378, 77.52266455220791],
        [12.98802921566272, 77.5199482104062],
        [12.985713211340425, 77.5233436376584],
        [12.986209499798449, 77.52622975082272],
        [12.983397185429254, 77.52775769308624],
        [12.980750272242886, 77.5359067184915],
        [12.975640474021205, 77.54829691047598],
        [12.984928686858055, 77.548852159467],
        [12.997552885454809, 77.55111942618021],
        [13.00102442754094, 77.53682176466253],
        [12.997688141250322, 77.52557797259522],
      ],
      area: "Isro Layout",
      details:
        "ISRO Layout aka Vikram Sarabhai Layout – It is an 83-acre (340,000 m2) planned residential area formed by BDA in the mid-1980s for ISRO employees. The area is now managed by Space Employees Cooperative Housing Society.",
    },
    {
      id: 3,
      coordinates: [
        [12.939409566514257, 77.53222820856024],
        [12.936121955990146, 77.53138489749097],
        [12.92231351873778, 77.53239687077405],
        [12.910477107595284, 77.5295296131386],
        [12.902092643869778, 77.52413242229528],
        [12.893543489508886, 77.51367536503653],
        [12.887131432092659, 77.50827817419321],
        [12.883514301627557, 77.49950773907284],
        [12.878910605496301, 77.49512252151135],
        [12.873484712191157, 77.49697780586371],
        [12.86559229412336, 77.50810951197934],
        [12.858192926660706, 77.52767432878625],
        [12.863783580004338, 77.53205954634637],
        [12.875622199332781, 77.54352857688832],
        [12.883349885365305, 77.5469018211653],
        [12.887131432092659, 77.56022613605967],
        [12.897982509963384, 77.57220115324316],
        [12.90488749634963, 77.57355045095403],
        [12.9136006594413, 77.56629797575835],
        [12.921491563862915, 77.56140677155662],
        [12.921984737112467, 77.55702155399655],
        [12.927409578570007, 77.5474078078069],
        [12.933820602840996, 77.53846871047278],
        [12.939409566514257, 77.53222820856024],
      ],
      area: "Basaveshwar nagar",
      details:
        "Basaveshwaranagar is home to many industry, banking and retail outlets. The Siddaiah Puranik Road is the main commercial hub of Basaveshwaranagar.",
    },
  ],
};

export function fetch(param) {
  return data[param];
}
