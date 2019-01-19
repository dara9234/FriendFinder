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
      Name: "Naush",
      photo: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-1/p240x240/30652741_10216084658538305_1457368070950486016_n.jpg?_nc_cat=102&_nc_eui2=AeHspsmyohyO6Wbf5GOETSJ9YlNBu_4xgDJPF07HxNNNdFILT8G9qDac9LcyDMlOkOVjUd6kQQGKm11KXhkzIP07jlsb139Og8MXShstR3tIKw&_nc_ht=scontent-ort2-1.xx&oh=f13b9a1864a8331c505b57190879ddea&oe=5CFBF659",
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
      photo: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/13615267_1471540299538874_https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-1/p240x240/3381_10205287987068638_3523910521334249916_n.jpg?_nc_cat=101&_nc_eui2=AeHy5aonfV1m3EvAy7YnNvVJe5Pdf22HnI3j5e3jmaNsZ1JJotl5wGcVMO6-Ts2F73SWF5sZOLdJ924QMTzHtqbfIZf5HO3B9-hJOQ5xL2NGJA&_nc_ht=scontent-ort2-1.xx&oh=4d0463aa38b6d096f528800474445151&oe=5CC391A25317114675867547632_n.jpg?_nc_cat=108&_nc_eui2=AeG_FfIDHKIm6Z2j7JVi2XoxR8wSzM0xDaDg49_0ezuJ1gFVXRPG_UY8DGY_Ho2I2q5VVyLG0GJvIhmn4wIvAEDKqCAIO9rlE-lkQpYidD0C2w&_nc_ht=scontent-ort2-1.xx&oh=425418477ad44cb0d6d167062228ece3&oe=5CFE4E54",
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
      Name: "James",
      photo: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-1/p240x240/16406618_611492679056269_361453375548292563_n.jpg?_nc_cat=102&_nc_eui2=AeF9dR1yCE2ak5fWIZqzm4CryyPvGqibG8EKfqSAiLMAzXGH-vua7e90X4gRW_V9DzfsS_4-VvfHnqgybV_tcNcUk9Pp3la2Ld39Z59k38kw7w&_nc_ht=scontent-ort2-1.xx&oh=f8b04d02016c80311f52c9da28cc5180&oe=5CC718FB",
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
      photo: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-1/c0.0.240.240a/p240x240/49234266_10156288125419412_5840499139888021504_n.jpg?_nc_cat=108&_nc_eui2=AeGyvBgdor4AOr9P1NYzOvfh2wp0AUz8_DcZlmAnAzthCuoQBkYugFs1MRfGRlAzzvsSWAzLTn7pdw0kfqlLSRCfe2PsVi8Neo-a35oo793ICw&_nc_ht=scontent-ort2-1.xx&oh=6b930f90ea28f3eec4ad663853715126&oe=5CBB5AA2",
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
      photo: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-0/p552x414/45702491_10215479492878393_2423756049220632576_n.jphttps://scontent-ort2-1.xx.fbcdn.net/v/t1.0-1/p240x240/33458728_10214763437266791_273889596314484736_n.jpg?_nc_cat=101&_nc_eui2=AeEjh5bcwGdaeAQPo79t1qOTFNQ2GJYFvrSORdC-xsMXGToBER4KSS2EjUSPm5FnxlAobl4E98q8nybPEYs1X-zwqjjVmamLLY3OprZ-AVV6gw&_nc_ht=scontent-ort2-1.xx&oh=1d428bd3e729baaa6a2795edd620e138&oe=5CB46E15g?_nc_cat=101&_nc_eui2=AeGxEDHCdMAkLAo1ThyXsYTa21GntgnPt6VlgNecA9k5sHtjxE2ZxeO9_oP7cOtuoVaUQTaigTjvutPPTX9zginCYMD_W6Lv_CYm6qYwn4pzHQ&_nc_ht=scontent-ort2-1.xx&oh=d7b600ea505e631e28686d703aa61b04&oe=5CC41F70",
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
      Name: "Darren",
      photo: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/c0.0.468.468a/12524277_1139223146110747_https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-1/p240x240/1455031_876157382439539_6531768201786943474_n.jpg?_nc_cat=110&_nc_eui2=AeH6am9oXpZ-Jkoa54wAIYnmAf8TOyCm-ihQbV1xyzjRkAGKg2n7vB9GGs6m29vIR8bvvVR48NoC5x4ZZtG3a5JMyLWwXkxqm7QkS6kbOJ7KqQ&_nc_ht=scontent-ort2-1.xx&oh=1d445dd49c002c049dda69fcb9e6a6ee&oe=5CBCF7944980294166037866803_n.jpg?_nc_cat=102&_nc_eui2=AeE7q19r7HL5Hdtd2j1IFUsJIwvnvA2QwkrHL-BDKCPwwSZabivzLtYjOyocqBs_SDqyRgupgSOty8TdL78XyzdjO6UUyDXUg2hrQeM7LdNAZA&_nc_ht=scontent-ort2-1.xx&oh=4b02f49b162d8383160094c426f14ac6&oe=5CD0409F",
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
      Name: "Tori",
      photo: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-0/c100.0.600.60https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-1/p240x240/49804356_2669157963096115_6116396886816456704_n.jpg?_nc_cat=106&_nc_eui2=AeFjHzO7in8rghlKGI5l6gjCQRD-j02nT3IpiX2S7ba6kTor4_aZHHkd_Q3mk72TSvK2ZNb_-c9405-rav2nADXf6ydRlIdhuhHyjHv3lJNItg&_nc_ht=scontent-ort2-1.xx&oh=b33f09307669066777aad1e4d83ff765&oe=5CCB175C0a/p600x600/48394434_10205004589790150_3609433216399704064_o.jpg?_nc_cat=104&_nc_eui2=AeEqjctJUdIW4dl6hzH2N0i59eKoMijL2OCEIDIzImJPrS81lhLkabW-DX9QJH_168vzXaqv5O2nqRknugwZA3_FWP3F-VW425h-2Q7GKscLBw&_nc_ht=scontent-ort2-1.xx&oh=33e6505704fd485bad651dace5c77b9d&oe=5CB6B872",
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
      Name: "John",
      photo: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/13903245_1020https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-1/c0.40.240.240a/p240x240/20664866_1377656662281926_8103111901497096778_n.jpg?_nc_cat=111&_nc_eui2=AeHyUJMelemUPfNcJp6_aS0COi4z01ntRJdPNNCMiPh_qzOO74YJ-1IL5gEQQh66mGa47zXlq2_juoTKvzXD7adzR96bfI9khRBpfwdAC09_0w&_nc_ht=scontent-ort2-1.xx&oh=39e77acb6b8396249d1d83214d1adf8e&oe=5CC3E1B81784415287800_8865330062274003343_n.jpg?_nc_cat=108&_nc_eui2=AeEdy5-UK7sX10hAenm2mXs0gS3IldrkmVYyOLaek0h4t4penyvEDZhvp8_meYOSeOd9mJEuL4mLocSB8cDWBhJAuBzv1zaH9ntTQ8IhlKUaQg&_nc_ht=scontent-ort2-1.xx&oh=bcd864cb18233043cd4359103ef69b56&oe=5CCC723E",
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
      photo: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/29497986_10155132486526607_6992171096865711193_n.jpg?_nc_cat=101&_nc_eui2=AeF52fzffhrG0ZEB3y-miSHF2LO2j6qG5g3FSipbeZF0WVCqp3b-uDtQP1tejWI63WwJSF81ok78Wd73673t1fa7otYFZLTLxnLkXiuI9zY4MQ&_nc_ht=scontent-ort2-1.xx&oh=1bee485d1094af22ce1c0c4d593a244c&oe=5CB916AA",
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
      photo: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/29511887_10204720489688634_4921485927752094652_n.jpg?_nc_cat=104&_nc_eui2=AeHXa9rXidv1rAcyVvNGv_PHQUmaXIO6QzOk7olK5APgckQk9XA0GW9gtDPFjJrxQOXYlrUvB5sefwVptVAaUyTriklrbHf7fkrF9iowG9dcyA&_nc_ht=scontent-ort2-1.xx&oh=bd2e4eb8c5d7f00d61d4e659c3a764ac&oe=5CD20DE9",
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
  