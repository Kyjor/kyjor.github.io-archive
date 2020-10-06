import path from 'path';
import fetch from 'isomorphic-fetch';


async function turnGamesIntoPages({ graphql, actions }) {
    const gameTemplate = path.resolve('./src/templates/Game.js');

    const { data } = await graphql (`
    query{
        games: allSanityGame {
            nodes {
                name
                slug {
                    current
                }
            }
        }
    }`);
    

    data.games.nodes.forEach(game => {
        actions.createPage({
            path: `game/${game.slug.current}`,
            component: gameTemplate,
            context: {
                slug: game.slug.current,
            },
        });
    });

}

async function turnPostsIntoPages({ graphql, actions }) {
    const postTemplate = path.resolve('./src/templates/Post.js');

    const { data } = await graphql (`
    query{
        posts: allSanityPost {
            nodes {
                slug {
                  current
                }
                title
            }
        }
    }`);
    

    data.posts.nodes.forEach(post => {
        actions.createPage({
            path: `blog/${post.slug.current}`,
            component: postTemplate,
            context: {
                slug: post.slug.current,
            },
        });
    });

}


async function fetchGamesAndTurnIntoNodes({ actions, createNodeId, createContentDigest }){
    const res = await fetch('https://sampleapis.com/switch/api/games');
    const games = await res.json();
    

    for (const game of games) {
        const nodeMeta = {
            id: createNodeId(`game-${game.name}`),
            parent: null,
            children: [],
            internal: {
                type: 'Game',
                mediaType: 'application/json',
                contentDigest: createContentDigest(game),
            }
        };
        actions.createNode({
            ...game,
            ...nodeMeta,
        })
    }
}

// async function turnTeamIntoPages({ graphql, actions}){
//     const { data } = await graphql(`
//         query {
//             people: allSanityPerson{
//                 totalCount
//                 nodes{
//                     name
//                     id
//                     slug{
//                         current
//                     }
//                 }
//             }
//         }
        
//     `);
//         const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE);
//         const pageCount = Math.ceil(data.team.totalCount / pageSize);

//     Array.from({ length:pageCount }).forEach((_, i) => {
//         actions.createPage({
//             path: `/team/${i + 1}`,
//             component: path.resolve('./src/pages/team.js'),

//             context: {
//                 skip: i * pageSize,
//                 currentPage: i + 1,
//                 pageSize,
//             },
//         })
//     })

// }

async function turnPersonsIntoPages({ graphql, actions }) {
    const personTemplate = path.resolve('./src/templates/Person.js');

    const { data } = await graphql (`
    query {
        people: allSanityPerson{
            totalCount
            nodes{
                name
                id
                slug{
                    current
                }
            }
        }
    }
    `);
    

    data.people.nodes.forEach(person => {
        actions.createPage({
            path: `team/${person.slug.current}`,
            component: personTemplate,
            context: {
                name: person.person,
                slug: person.slug.current,
            },
        });
    });

}

export async function sourceNodes(params) {
    await Promise.all([
        fetchGamesAndTurnIntoNodes(params),
    ]);
}

export async function createPages(params) {

    await Promise.all([
        turnGamesIntoPages(params),
        turnPostsIntoPages(params),
      //  turnTeamIntoPages(params),
    ]);
    
}

