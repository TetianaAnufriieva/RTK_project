import { useState } from "react";
import styles from "./Dictionary.module.css";

import { ClipLoader } from "react-spinners";
import { useGetDictionaryQuery } from "./dictionaryApi";

import { v4 as uuidv4 } from "uuid";

export const Dictionary = () => {
  const [word, setWord] = useState<string>("");
  const {
    data: wordData,
    error,
    isFetching,
    refetch,
  } = useGetDictionaryQuery(word, {
    skip: !word,
  });

  const handleSearch = () => {
    if (!word) {
      alert("Please, enter the word");
      return;
    }
    refetch();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.app_title}>Dictionary App</h1>

      <div className={styles.search_container}>
        <input
          type="text"
          className={styles.search_input}
          placeholder="Enter word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {isFetching && (
        <div className={styles.loadingWrapper}>
          <ClipLoader size={50} />
        </div>
      )}

      {error && <p className={styles.error}>Error: the word was not found</p>}

      {wordData?.[0]?.word && (
        <div className={styles.dictionary_card}>
          <h2>{wordData[0].word}</h2>
          {wordData[0].meanings.map((meaning) => (
            <div key={uuidv4()}>
              <p>{meaning.partOfSpeech}</p>
              <ul>
                {meaning.definitions.map((def) => (
                  <li key={uuidv4()}>{def.definition}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
