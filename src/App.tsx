import Checkbox from './components/box/Checkbox.tsx'

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Checkbox id="1" isChecked={false} isDisabled={false} handleChange={() => alert('하이')} text={'안녕'} />\
      <span></span>
      <Checkbox id="2" isChecked={true} isDisabled={false} handleChange={() => alert('하이')} />
      <Checkbox id="3" isChecked={true} isDisabled={false} handleChange={() => alert('하이')} />
      {/*<h1>Hi</h1>*/}
    </div>
  )
}

export default App
