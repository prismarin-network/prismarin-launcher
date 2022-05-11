export function getCorrectDownloadLinkForOs(game: Game) {
    const currentOS = process.platform
    return game.os[currentOS] || undefined
}
