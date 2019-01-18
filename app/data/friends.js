// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================
//created an array of friends and each friend is an objectinside the object we have the name
//attribute the photo URL as well as thescores which I put into an array
var friends = [
    {
      Name: "Vison",
      photo: "https://www.facebook.com/photo.php?fbid=108065366831174&set=a.108065383497839&type=3",
      scores: [
        "5",
        "1",
        "1",
        "5",
        "1",
        "1",
        "5",
        "4",
        "4"
      ]
      
    },

    {
      Name: "Maribel",
      photo: "https://www.facebook.com/photo.php?fbid=110645329913048&set=a.108294746814773&type=3&source=11&referrer_profile_id=100029027442542",
      scores: [
        "5",
        "1",
        "3",
        "3",
        "3",
        "1",
        "1",
        "2",
        "1"
      ]
      
    },

    {
      Name: "Tokems",
      photo: "https://www.facebook.com/photo.php?fbid=127192288201412&set=a.127184814868826&type=3&source=11&referrer_profile_id=100027319235353",
      scores: [
        "5",
        "5",
        "3",
        "3",
        "3",
        "4",
        "4",
        "4",
        "3"
      ]
      
    },
    {
      Name: "Rupa",
      photo: "https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/28166576_10155595697114412_262931759061080614_n.jpg?_nc_cat=101&_nc_ht=scontent-ort2-2.xx&oh=71ee0faec14f7021c7acb76235d9fcbd&oe=5CBD03A7",
      scores: [
        "3",
        "5",
        "3",
        "5",
        "4",
        "5",
        "2",
        "3",
        "3"
      ]
      
    },

    {
      Name: "Nancy Roure",
      photo: "https://www.facebook.com/photo.php?fbid=106720693673348&set=a.106368183708599&type=3&source=11&referrer_profile_id=100030062533079",
      scores: [
        "3",
        "4",
        "5",
        "2",
        "2",
        "2",
        "4",
        "3",
        "3"
      ]
      
    },

    {
      Name: "Huzi",
      photo: "https://www.facebook.com/photo.php?fbid=798983475693&set=a.534987016713&type=3&source=11&referrer_profile_id=214202252",
      scores: [
        "2",
        "1",
        "3",
        "5",
        "1",
        "5",
        "5",
        "1",
        "5"
      ]
      
    },

    {
      Name: "Alan",
      photo: "https://www.facebook.com/photo.php?fbid=10161189195810696&set=a.10150275017350696&type=3",
      scores: [
        "2",
        "5",
        "3",
        "5",
        "1",
        "5",
        "2",
        "1",
        "1"
      ]
      
    },
    {
      Name: "MissMo",
      photo: "https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-1/p74x74/37100795_10156332954202221_7226434530247180288_n.jpg?_nc_cat=110&_nc_ht=scontent-ort2-2.xx&oh=c205e91054e79190c95ab37fed28dea2&oe=5CD1F72B",
      scores: [
        "2",
        "5",
        "3",
        "4",
        "4",
        "5",
        "5",
        "1",
        "4"
      ]
      
    },
    {
      Name: "Jasmine",
      photo: "https://www.facebook.com/photo.php?fbid=10210827642064026&set=a.1453054243262&type=3",
      scores: [
        "1",
        "5",
        "3",
        "5",
        "5",
        "5",
        "1",
        "1",
        "4"
      ]
      
    },
    {
      Name: "Serena",
      photo: "https://www.facebook.com/profile/picture/view/?profile_id=1395554349",
      scores: [
        "1",
        "3",
        "3",
        "5",
        "1",
        "4",
        "4",
        "1",
        "5"
      ]
      
    },
    {
      Name: "Pat",
      photo: "https://www.facebook.com/profile/picture/view/?profile_id=589029757",
      scores: [
        "1",
        "5",
        "3",
        "5",
        "1",
        "1",
        "1",
        "1",
        "2"
      ]
      
    },
    {
      Name: "Allison",
      photo: "https://www.facebook.com/photo.php?fbid=10105804162967989&set=a.805407515029&type=3&source=11&referrer_profile_id=30805725",
      scores: [
        "1",
        "2",
        "3",
        "5",
        "5",
        "5",
        "4",
        "1",
        "1"
      ]
      
    },

  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friends;
  