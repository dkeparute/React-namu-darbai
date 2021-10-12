import Box from "./Components/Box";

const data = [
  {backgroundColor: '#A621FF', 
  borderColor: '#E8C4FF'
  },
  {backgroundColor: '#FF4E44', 
  borderColor: '#C1FFFC'
  },
  {backgroundColor: '#E7FF7F', 
  borderColor: '#2D42FF'
  },
  {backgroundColor: '#3AF8FF', 
  borderColor: '#FF3FDB'
  },
  {backgroundColor: '#FF3FDB', 
  borderColor: '#3AF8FF'
  },
  {backgroundColor: '#2D42FF', 
  borderColor: '#E7FF7F'
  },
  {backgroundColor: '#C1FFFC', 
  borderColor: '#FF4E44'
  },
  {backgroundColor: '#E8C4FF', 
  borderColor: '#A621FF'
  },
]

function App() {
  return (
    <div>
    {data.map((box, index) =><Box key={index} backgroundColor={box.backgroundColor} borderColor= {box.borderColor} /> )}

    
      {/* <Box backgroundColor={'#A621FF'} borderColor= {'#E8C4FF'} /> */}
      {/* <Box backgroundColor={'#FF4E44'} borderColor= {'#C1FFFC'}/>
      <Box backgroundColor={'#E7FF7F'} borderColor= {'#2D42FF'}/>
      <Box backgroundColor={'#3AF8FF'} borderColor= {'#FF3FDB'}/>
      <Box backgroundColor={'#FF3FDB'} borderColor= {'#3AF8FF'}/>
      <Box backgroundColor={'#2D42FF'} borderColor= {'#E7FF7F'}/>
      <Box backgroundColor={'#C1FFFC'} borderColor= {'#FF4E44'}/>
      <Box backgroundColor={'#E8C4FF'} borderColor= {'#A621FF'}/> */}
    </div>
  );
}

export default App;
