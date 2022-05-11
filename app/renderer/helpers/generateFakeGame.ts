export function generateFakeGame(id?: string) {
    return {
        id: id || 'dungeon_outlast',
        name: `Dungeon Outlast`,
        version: '1.0.0',
        tags: ['Multiplayer', 'Fun', 'Horror'],
        icon: '',
        background: '',
        poster: '',
        os: {
            'darwin': 'https://api.prismar.in/games/dungeon_outlast/download',
            'win32': 'https://api.prismar.in/games/dungeon_outlast/download',
        }
    }
}
