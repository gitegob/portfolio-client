import actionTypes from "../actions/types";

const initState = {
  blogs: [
    {
      title: 'Conversations with random people',
      body: `Are you all right? No. He's making the tie in the cab as they're flying up Madison. He finally gets there. He runs up the steps into the
      church. The wedding is on. And he says, "Watermelon? I thought you said Guatemalan. Why would I marry a watermelon?" Is that a bee joke?
      Most bee jobs are small ones. But bees know that every small job, if it's done well means a lot. But choose carefully because you'll stay in
      the job you pick for the rest of your life. Our honey is being brazenly stolen on a massive scale! This is worse than anything bears have
      done! I intend to do something. Oh, Barry, stop. Who told you humans are taking our honey? That's a rumor. Do these look like rumors? That's
      a conspiracy theory. These are obviously doctored photos.
      We try not to sting. It's usually fatal for us. So you have to watch your temper. Very carefully. You kick a wall, take a walk, write an
      angry letter and throw it out. Work through it like any emotion. How come you don't fly everywhere? It's exhausting. Why don't you run
      everywhere? It's faster. Yeah, OK, I see, I see. All right, your turn. TiVo. You can just freeze live TV? That's insane! You don't have
      that? We have Hivo, but it's a disease. It's a horrible, horrible disease. Never thought I'd make it. Three days grade school, three days
      high school. Those were awkward. Three days college. I'm glad I took a day and hitchhiked around the hive. You did come back different.
      Tonight we're talking to Barry Benson. Did you ever think, "I'm a kid from the hive. I can't do this"? Bees have never been afraid to change
      the world. What about Bee Columbus? Bee Gandhi? Bejesus? Where I'm from, we'd never sue humans. We were thinking of stickball or candy
      stores.`,
      createdAt: '27 Dec 2019'
    },
    {
      title: 'Conversations with random people',
      body: `Are you all right? No. He's making the tie in the cab as they're flying up Madison. He finally gets there. He runs up the steps into the
      church. The wedding is on. And he says, "Watermelon? I thought you said Guatemalan. Why would I marry a watermelon?" Is that a bee joke?
      Most bee jobs are small ones. But bees know that every small job, if it's done well means a lot. But choose carefully because you'll stay in
      the job you pick for the rest of your life. Our honey is being brazenly stolen on a massive scale! This is worse than anything bears have
      done! I intend to do something. Oh, Barry, stop. Who told you humans are taking our honey? That's a rumor. Do these look like rumors? That's
      a conspiracy theory. These are obviously doctored photos.
      We try not to sting. It's usually fatal for us. So you have to watch your temper. Very carefully. You kick a wall, take a walk, write an
      angry letter and throw it out. Work through it like any emotion. How come you don't fly everywhere? It's exhausting. Why don't you run
      everywhere? It's faster. Yeah, OK, I see, I see. All right, your turn. TiVo. You can just freeze live TV? That's insane! You don't have
      that? We have Hivo, but it's a disease. It's a horrible, horrible disease. Never thought I'd make it. Three days grade school, three days
      high school. Those were awkward. Three days college. I'm glad I took a day and hitchhiked around the hive. You did come back different.
      Tonight we're talking to Barry Benson. Did you ever think, "I'm a kid from the hive. I can't do this"? Bees have never been afraid to change
      the world. What about Bee Columbus? Bee Gandhi? Bejesus? Where I'm from, we'd never sue humans. We were thinking of stickball or candy
      stores.`,
      createdAt: '27 Dec 2019'
    },
    {
      title: 'Conversations with random people',
      body: `Are you all right? No. He's making the tie in the cab as they're flying up Madison. He finally gets there. He runs up the steps into the
      church. The wedding is on. And he says, "Watermelon? I thought you said Guatemalan. Why would I marry a watermelon?" Is that a bee joke?
      Most bee jobs are small ones. But bees know that every small job, if it's done well means a lot. But choose carefully because you'll stay in
      the job you pick for the rest of your life. Our honey is being brazenly stolen on a massive scale! This is worse than anything bears have
      done! I intend to do something. Oh, Barry, stop. Who told you humans are taking our honey? That's a rumor. Do these look like rumors? That's
      a conspiracy theory. These are obviously doctored photos.
      <br />
      <br />
      We try not to sting. It's usually fatal for us. So you have to watch your temper. Very carefully. You kick a wall, take a walk, write an
      angry letter and throw it out. Work through it like any emotion. How come you don't fly everywhere? It's exhausting. Why don't you run
      everywhere? It's faster. Yeah, OK, I see, I see. All right, your turn. TiVo. You can just freeze live TV? That's insane! You don't have
      that? We have Hivo, but it's a disease. It's a horrible, horrible disease. Never thought I'd make it. Three days grade school, three days
      high school. Those were awkward. Three days college. I'm glad I took a day and hitchhiked around the hive. You did come back different.
      Tonight we're talking to Barry Benson. Did you ever think, "I'm a kid from the hive. I can't do this"? Bees have never been afraid to change
      the world. What about Bee Columbus? Bee Gandhi? Bejesus? Where I'm from, we'd never sue humans. We were thinking of stickball or candy
      stores.`,
      createdAt: '27 Dec 2019'
    }
  ],
};
const blogsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_BLOGS:
      return {
        ...state,
        blogs: payload.blogs.length ? payload.blogs : state.blogs
      };
    default:
      return state;
  }
};

export default blogsReducer;