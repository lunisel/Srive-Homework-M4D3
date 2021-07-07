import fantasy from '../data/fantasy.json'
import MyBook from './BookCards'

export default function LatestReleases() {
    console.log(fantasy)
    return <div>{
        fantasy.map(book => {
            return <MyBook b={book} />
        })
        }</div>
}