import './App.css'
import MyNavBar from './component/MyNavBar'
import MyFooter from './component/MyFooter'
import MyJumbotron from './component/Jumbotron'
import LatestReleases from './component/LatestReleases'
import AlertMessage from './component/WarnSign'
import MyBadgeFunction from './component/MyBadge'


function App() {
  return (
    <div>
      <AlertMessage text="Alert is going on"/>
      <MyNavBar title="Easy-Book-Store" />
      <MyBadgeFunction />
      <MyJumbotron />
      <LatestReleases />
      <MyFooter />
    </div>
  )
}

export default App