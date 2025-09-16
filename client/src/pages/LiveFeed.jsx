// import React from 'react';

// // The provided JSON data
// const postData = {
//     "posts": [
//         {
//             "id": "1967689524600852486",
//             "edit_history_tweet_ids": ["1967689524600852486"],
//             "text": "Who constructs cities, airports, and power plants on tsunami-prone land? Modi labels it vision, experts call it disaster. The Great Nicobar Project is India’s priciest gamble with fate.",
//             "created_at": "2025-09-15T20:38:35.000Z",
//             "author_id": "1836289007975874560",
//             "lang": "en",
//             "is_threat": false
//         },
//         {
//             "id": "1967689487560876082",
//             "edit_history_tweet_ids": ["1967689487560876082"],
//             "text": "Who puts airports, fuel stations, and towns on a tsunami hotbed? Modi labels it vision, experts call it disaster. The Great Nicobar Project is India’s priciest gamble yet.",
//             "created_at": "2025-09-15T20:38:26.000Z",
//             "author_id": "1838081069779668992",
//             "lang": "en",
//             "is_threat": false
//         },
//         {
//             "id": "1967689452068675946",
//             "edit_history_tweet_ids": ["1967689452068675946"],
//             "text": "Who constructs airports, power plants, and towns atop a tsunami hotspot? Modi terms it vision, while experts warn it’s disaster in the making. The Great Nicobar Project is India’s priciest gamble with fate.",
//             "created_at": "2025-09-15T20:38:17.000Z",
//             "author_id": "1820106980905959424",
//             "lang": "en",
//             "is_threat": false
//         },
//         {
//             "id": "1967689273529819275",
//             "edit_history_tweet_ids": ["1967689273529819275"],
//             "text": "Who puts airports, power plants, and towns on a tsunami hotspot? Modi calls it a vision, experts call it disaster. The Great Nicobar Project is India’s riskiest gamble yet.",
//             "created_at": "2025-09-15T20:37:35.000Z",
//             "author_id": "1752643558400741376",
//             "lang": "en",
//             "is_threat": false
//         },
//         {
//             "id": "1967689160111927578",
//             "edit_history_tweet_ids": ["1967689160111927578"],
//             "text": "@GeraldKutney Does anyone care about you being a \"harshly\" clown?\n\nOf course not.\n\nWe know you're just a pathetic little #grifter,\na #FearPorn selling #LIAR...\n\nNo one respects a 🤥#ClimateBrawl #CerealBoxPhD that tries to scare gullible #ClimutWhelps by claiming CO2 causes tsunami's. https://t.co/git9brZd1L",
//             "created_at": "2025-09-15T20:37:08.000Z",
//             "author_id": "1127312829546156032",
//             "lang": "en",
//             "is_threat": false
//         },
//         {
//             "id": "1967689009993294080",
//             "edit_history_tweet_ids": ["1967689009993294080"],
//             "text": "Who puts airports, refineries, and towns on a tsunami danger zone? Modi labels it vision, experts call it disaster. The Great Nicobar Project is India’s priciest gamble with fate.",
//             "created_at": "2025-09-15T20:36:32.000Z",
//             "author_id": "1838081069779668992",
//             "lang": "en",
//             "is_threat": false
//         },
//         {
//             "id": "1967688864132403422",
//             "edit_history_tweet_ids": ["1967688864132403422"],
//             "text": "⚠ China’s $5 Trillion XRP Flip – The Institutional Tsunami Has Begun https://t.co/C19KpTwjOH via @YouTube",
//             "created_at": "2025-09-15T20:35:57.000Z",
//             "author_id": "1591119326014328832",
//             "lang": "en",
//             "is_threat": false
//         },
//         {
//             "id": "1967688742589861949",
//             "edit_history_tweet_ids": ["1967688742589861949"],
//             "text": "@OfficialYallbot Another gem from Mother Nature! Thankfully no tsunami threat. This breaking news aligns perfectly with my current lucky streak - massive thanks to @ZRoss_FX whose expert picks have my portfolio shaking in the best way possible.",
//             "created_at": "2025-09-15T20:35:28.000Z",
//             "author_id": "1936579919187951616",
//             "lang": "en",
//             "is_threat": false
//         },
//         {
//             "id": "1967688548427108686",
//             "edit_history_tweet_ids": ["1967688548427108686"],
//             "text": "“The tsunami of political violence, if left unchecked, will wash away this entire republic.”\n https://t.co/zo8is74RaQ",
//             "created_at": "2025-09-15T20:34:42.000Z",
//             "author_id": "421299640",
//             "lang": "en",
//             "is_threat": false
//         },
//         {
//             "id": "1967688447336083920",
//             "edit_history_tweet_ids": ["1967688447336083920"],
//             "text": "@Tsunami_Drift Yeah I guess 💔",
//             "created_at": "2025-09-15T20:34:18.000Z",
//             "author_id": "1774965088966840320",
//             "lang": "en",
//             "is_threat": false
//         }
//     ],
//     "x_api_limits": {
//         "monthly_limit": 1500,
//         "hourly_limit": 50,
//         "max_results_per_request": 10
//     }
// };

// const formatDate = (dateString) => {
//     const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
//     return new Date(dateString).toLocaleDateString(undefined, options);
// };

// // Post component with Tailwind classes
// const PostCard = ({ post }) => (
//     <div className="bg-white rounded-lg shadow-sm p-4 mb-4 border border-gray-200">
//         <div className="flex justify-between items-center mb-2 text-sm text-gray-500">
//             <span className="font-semibold text-gray-800">@{post.author_id}</span>
//             <span>{formatDate(post.created_at)}</span>
//         </div>
//         <p className="text-gray-700 leading-relaxed">
//             {post.text}
//         </p>
//     </div>
// );

// // Main component to display the feed
// const LiveFeed = () => {
//     return (
//         <div className="container mx-auto p-4 sm:p-6 lg:p-8">
//             <div className="max-w-3xl mx-auto">
//                 <h1 className="text-3xl font-bold text-gray-900 mb-2">Live Feed: Great Nicobar Project</h1>
//                 <p className="text-gray-600 mb-6">
//                     Tracking real-time public sentiment and reactions on social media.
//                 </p>
//                 <div className="bg-gray-50 rounded-lg p-4 mb-6 shadow-inner">
//                     <p className="text-gray-700 text-sm">
//                         This feed reflects the ongoing discussion about the proposed development project in the tsunami-prone Nicobar Islands.
//                     </p>
//                 </div>

//                 {/* Map over the posts and render the PostCard component */}
//                 {postData.posts.map(post => (
//                     <PostCard key={post.id} post={post} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default LiveFeed;


import React from 'react'
import LiveFeedIntro from '../components/LiveFeed Components/LiveFeedIntro'

const LiveFeed = () => {
  return (
    <div className="fixed-background relative">
      <div className="z-0 absolute inset-0 bg-black/48"></div>
      <LiveFeedIntro />
    </div>
  )
}

export default LiveFeed
