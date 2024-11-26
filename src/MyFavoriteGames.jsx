function MyFavoriteGames() {
  const games = ["HoMM III", "DooM", "Resident Evil", "Mass Effect", "Resident Evil"];
  const gameList = games.map(game => <li key={game}>{game}</li>)
  return (
    <div>
      <h1>My favorite games: </h1>
      <ul>
        {gameList}
      </ul>
    </div>
  )
}

export { MyFavoriteGames };