import { useEffect, useState } from "react"
import debounce from "lodash.debounce"
import { useDispatch, useSelector } from "react-redux"
import { getGists, searchGists } from '../store/gists'
import styles from './home.module.css'

const searchGistsDebounced = debounce((query, dispatch) => {
  dispatch(searchGists(query));
}, 1000)


const buttons = Array.from({ length: 10 }).map((_, index) => index + 1);


export function GistsPage() {
  const [value, setValue] = useState("bogdanq")
  const dispatch = useDispatch();
  const { gists, pending, error, gistsSearch, errorSearch, pendingSearch, } = useSelector((state) => state.gists);


  console.log("gists1111", gists)

  useEffect(() => {
    dispatch(getGists());
  }, [dispatch]);

  useEffect(() => {
    searchGistsDebounced(value, dispatch);
  }, [dispatch, value]);


  if (pending || pendingSearch) {
    return <div className={styles.wrapper}>
      <h1>Pending...</h1>
    </div>
  }

  if (error || errorSearch) {
    return <div className={styles.wrapper}>
      <h1>Error...</h1>
    </div>
  }


  return (
    <div className={styles.wrapper}>
      <h1>GistsPage</h1>
      {buttons.map((button) => (
        <button onClick={() => dispatch(getGists(button))} key={button}>{button}</button>
      ))}

      {gistsSearch.map((gist) => (
        <h2 className={styles.gist} key={gist.url}>{gist.url}</h2>
      ))}

      <div><input className={styles.input} value={value} onChange={e => setValue(e.target.value)} placeholder="Enter name" /></div>

      {gists.map((gist) => (
        <h2 className={styles.gist} key={gist.url}>{gist.url}</h2>
      ))}


    </div>
  );
}


