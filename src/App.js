import Header from "./Components/Header/Header";
import Concept from "./Components/Concept/Concept";
import componentsImage from "./assests/images/components.png";
import stateImage from "./assests/images/state.png";
import eventsImage from "./assests/images/events.png";

const concepts = [
  {
    title: "Components",
    image: componentsImage,
    description:
      "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.",
  },
  {
    title: "State",
    image: stateImage,
    description:
      "State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.",
  },
  {
    title: "Events",
    image: eventsImage,
    description:
      "Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.",
  },
];

function App() {
  return (
    <div>
      <Header />
      <ul id="concepts">
        {concepts.map((value)=>(
          <Concept title={value} />
        ))}
        {/* <Concept concepts={concepts}/> */}
        {/* {concepts.map((value) => (
        <Concept p={value} />
      ))} */}
      </ul>
    </div>
  );
}

export default App;
