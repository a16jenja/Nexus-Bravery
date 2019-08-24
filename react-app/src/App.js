import React, { Component } from "react";
import "./App.css";
import HeroApp from "./components/HeroApp";
import ErrorBoundary from "./components/ErrorBoundary";

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <div className="App">
          <HeroApp />
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;

// <React.Fragment>
//   <div class="wrapper">
//     <div className="header p-3 mb-2 bg-dark">
//       <h1 className="text-center text-light">HOTS Bravery</h1>
//     </div>

//     <div className="container">
//       <talentTable />
//     </div>

//     {/* <div className="container p-3 mb-2">
//       <div className="row justify-content-center">
//         <img src="https://static.heroesofthestorm.com/gd/3a87a62680f43b26f7dd3d203b77e8cd/heroes/abathur/circleIcon.png" />
//       </div>
//       <h1 className="text-center">Abathur</h1>
//       <div className="row">
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">Level</th>
//               <th scope="col">First</th>
//               <th scope="col">Second</th>
//               <th scope="col">Third</th>
//               <th scope="col">Fourth</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <th scope="row">1</th>
//               <td>Talent 1</td>
//               <td>Talent 2</td>
//               <td>Talent 3</td>
//               <td>Talent 4</td>
//             </tr>
//             <tr>
//               <th scope="row">4</th>
//               <td>Talent 1</td>
//               <td>Talent 2</td>
//               <td>Talent 3</td>
//               <td>Talent 4</td>
//             </tr>
//             <tr>
//               <th scope="row">7</th>
//               <td>Talent 1</td>
//               <td>Talent 2</td>
//               <td>Talent 3</td>
//               <td>Talent 4</td>
//             </tr>
//             <tr>
//               <th scope="row">10</th>
//               <td>Talent 1</td>
//               <td>Talent 2</td>
//               <td>Talent 3</td>
//               <td>Talent 4</td>
//             </tr>
//             <tr>
//               <th scope="row">13</th>
//               <td>Talent 1</td>
//               <td>Talent 2</td>
//               <td>Talent 3</td>
//               <td>Talent 4</td>
//             </tr>
//             <tr>
//               <th scope="row">16</th>
//               <td>Talent 1</td>
//               <td>Talent 2</td>
//               <td>Talent 3</td>
//               <td>Talent 4</td>
//             </tr>
//             <tr>
//               <th scope="row">20</th>
//               <td>Talent 1</td>
//               <td>Talent 2</td>
//               <td>Talent 3</td>
//               <td>Talent 4</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//       <div className="row justify-content-center">
//         <button type="button" className="btn btn-primary">
//           Start
//         </button>
//       </div>
//     </div> */}
//     <div className="container">
//       <HeroList />
//     </div>
//   </div>
// </React.Fragment>
