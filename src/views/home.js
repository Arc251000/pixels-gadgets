import { useEffect, useState } from "react";
import ExpandedButton from "../components/expanded_button";
import NavBar from "../components/navbar";
import TreeTuple from "../components/tree_tuple";
import '../css/home.css';

var data = [
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "Farm Land #406",
      "map_number": 406,
      "mapId": "pixelsNFTFarm-406",
      "roomId": "ljcMiTns-",
      "server": "E6HzecbP0",
      "tree_data": [
          {
              "name": "ent_treeLand2v2",
              "x": 3048,
              "y": 2936,
              "lastChop": 1710964547250
          }
      ]
  },
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "Beaver Heights x4 Void (304)",
      "map_number": 304,
      "mapId": "pixelsNFTFarm-304",
      "roomId": "mJWWaQ0-l",
      "server": "iW2byI-DE",
      "tree_data": [
          {
              "name": "ent_treeSpace1v1",
              "x": 3720,
              "y": 2664,
              "lastChop": 1710964604777
          }
      ]
  },
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "dexia barangay 💫",
      "map_number": 305,
      "mapId": "pixelsNFTFarm-305",
      "roomId": "BfwIcDGWa",
      "server": "wuEpUMOPa",
      "tree_data": [
          {
              "name": "ent_treeWater2v1",
              "x": 3376,
              "y": 2952,
              "lastChop": 1710964507288
          }
      ]
  },
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "Farm Land #306",
      "map_number": 306,
      "mapId": "pixelsNFTFarm-306",
      "roomId": "Kleep9-S8",
      "server": "T8g2_5EvB",
      "tree_data": [
          {
              "name": "ent_treeLand3v1",
              "x": 2872,
              "y": 2896,
              "lastChop": 1710964597227
          },
          {
              "name": "ent_treeLand3v1",
              "x": 2872,
              "y": 2872,
              "lastChop": 1710964595753
          }
      ]
  },
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "Farm Land #317",
      "map_number": 317,
      "mapId": "pixelsNFTFarm-317",
      "roomId": "v-RXMz8-e",
      "server": "tM0i1XxBC",
      "tree_data": [
          {
              "name": "ent_treeLand2v2",
              "x": 3952,
              "y": 2184,
              "lastChop": 1710964813511
          },
          {
              "name": "ent_treeLand1v2",
              "x": 2984,
              "y": 1992,
              "lastChop": 1710964784499
          }
      ]
  },
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "Farm Land #324",
      "map_number": 324,
      "mapId": "pixelsNFTFarm-324",
      "roomId": "H7NrlMika",
      "server": "XLcWbq74V",
      "tree_data": [
          {
              "name": "ent_treeLand1v1",
              "x": 3472,
              "y": 2800,
              "lastChop": 1710964555807
          }
      ]
  },
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "For Rent",
      "map_number": 378,
      "mapId": "pixelsNFTFarm-378",
      "roomId": "6exeJ_g_Z",
      "server": "h1jDedk01",
      "tree_data": [
          {
              "name": "ent_treeLand3v3",
              "x": 3792,
              "y": 1952,
              "lastChop": 1710964885608
          },
          {
              "name": "ent_treeLand3v2",
              "x": 3824,
              "y": 2000,
              "lastChop": 1710964887975
          }
      ]
  },
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "Farm Land #432",
      "map_number": 432,
      "mapId": "pixelsNFTFarm-432",
      "roomId": "JyinaONQ7",
      "server": "rcKhr7WcR",
      "tree_data": [
          {
              "name": "ent_treeWater2v2",
              "x": 2616,
              "y": 2328,
              "lastChop": 1710964554680
          },
          {
              "name": "ent_treeWater4v2",
              "x": 2424,
              "y": 2344,
              "lastChop": 1710964564041
          },
          {
              "name": "ent_treeWater1v2",
              "x": 2560,
              "y": 2416,
              "lastChop": 1710964562629
          }
      ]
  },
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "Water Land #449",
      "map_number": 449,
      "mapId": "pixelsNFTFarm-449",
      "roomId": "wyhZz0VXn",
      "server": "JrW-TTaQG",
      "tree_data": [
          {
              "name": "ent_treeWater1v3",
              "x": 3784,
              "y": 2864,
              "lastChop": 1710964652059
          },
          {
              "name": "ent_treeWater3v2",
              "x": 3864,
              "y": 2752,
              "lastChop": 1710964640449
          },
          {
              "name": "ent_treeWater3v1",
              "x": 3912,
              "y": 2720,
              "lastChop": 1710964645446
          },
          {
              "name": "ent_treeWater1v2",
              "x": 3792,
              "y": 2792,
              "lastChop": 1710964627245
          },
          {
              "name": "ent_treeWater1v2",
              "x": 3792,
              "y": 2728,
              "lastChop": 1710964632875
          },
          {
              "name": "ent_treeWater2v2",
              "x": 3704,
              "y": 2728,
              "lastChop": 1710964639325
          }
      ]
  },
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "Farm Land #477",
      "map_number": 477,
      "mapId": "pixelsNFTFarm-477",
      "roomId": "NIEWolyQU",
      "server": "CSeFYRu13",
      "tree_data": [
          {
              "name": "ent_treeLand3v3",
              "x": 3600,
              "y": 2232,
              "lastChop": 1710964648069
          },
          {
              "name": "ent_treeLand3v1",
              "x": 3472,
              "y": 2232,
              "lastChop": 1710964643022
          },
          {
              "name": "ent_treeLand3v2",
              "x": 3568,
              "y": 2176,
              "lastChop": 1710964646301
          }
      ]
  },
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "Farm Land #487",
      "map_number": 487,
      "mapId": "pixelsNFTFarm-487",
      "roomId": "FXpPyYp5A",
      "server": "T2Va-SsWW",
      "tree_data": [
          {
              "name": "ent_treeWater4v1",
              "x": 2896,
              "y": 2864,
              "lastChop": 1710964597882
          },
          {
              "name": "ent_treeWater3v3",
              "x": 2824,
              "y": 2816,
              "lastChop": 1710964618641
          },
          {
              "name": "ent_treeWater2v2",
              "x": 2824,
              "y": 2944,
              "lastChop": 1710964584305
          },
          {
              "name": "ent_treeWater2v1",
              "x": 2912,
              "y": 2840,
              "lastChop": 1710964608479
          },
          {
              "name": "ent_treeWater1v2",
              "x": 2824,
              "y": 2920,
              "lastChop": 1710964587350
          },
          {
              "name": "ent_treeWater4v3",
              "x": 2896,
              "y": 2912,
              "lastChop": 1710964577418
          },
          {
              "name": "ent_treeWater1v3",
              "x": 2912,
              "y": 2888,
              "lastChop": 1710964592542
          },
          {
              "name": "ent_treeWater3v3",
              "x": 2824,
              "y": 2864,
              "lastChop": 1710964604125
          },
          {
              "name": "ent_treeWater1v1",
              "x": 2912,
              "y": 2816,
              "lastChop": 1710964612071
          }
      ]
  },
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "Farm Land #504",
      "map_number": 504,
      "mapId": "pixelsNFTFarm-504",
      "roomId": "eUsMYzWI7",
      "server": "x03vgmm_P",
      "tree_data": [
          {
              "name": "ent_treeWater1v3",
              "x": 2744,
              "y": 2960,
              "lastChop": 1710964702014
          },
          {
              "name": "ent_treeWater4v2",
              "x": 3824,
              "y": 2896,
              "lastChop": 1710964594607
          },
          {
              "name": "ent_treeWater4v3",
              "x": 2784,
              "y": 2968,
              "lastChop": 1710964691063
          },
          {
              "name": "ent_treeWater2v3",
              "x": 2840,
              "y": 2992,
              "lastChop": 1710964696009
          },
          {
              "name": "ent_treeWater1v1",
              "x": 2928,
              "y": 1864,
              "lastChop": 1710964771170
          },
          {
              "name": "ent_treeWater3v3",
              "x": 3808,
              "y": 1952,
              "lastChop": 1710964660163
          },
          {
              "name": "ent_treeWater1v2",
              "x": 3904,
              "y": 2864,
              "lastChop": 1710964602163
          },
          {
              "name": "ent_treeWater2v2",
              "x": 3976,
              "y": 2792,
              "lastChop": 1710964616493
          },
          {
              "name": "ent_treeWater3v2",
              "x": 3688,
              "y": 1912,
              "lastChop": 1710964665344
          },
          {
              "name": "ent_treeWater4v1",
              "x": 3720,
              "y": 2976,
              "lastChop": 1710964586446
          },
          {
              "name": "ent_treeWater2v1",
              "x": 3760,
              "y": 2920,
              "lastChop": 1710964607424
          },
          {
              "name": "ent_treeWater2v1",
              "x": 2760,
              "y": 1912,
              "lastChop": 1710964764561
          },
          {
              "name": "ent_treeWater2v2",
              "x": 3944,
              "y": 2832,
              "lastChop": 1710964612546
          },
          {
              "name": "ent_treeWater3v1",
              "x": 3592,
              "y": 2016,
              "lastChop": 1710964668508
          }
      ]
  },
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "Farm Land #511",
      "map_number": 511,
      "mapId": "pixelsNFTFarm-511",
      "roomId": "VgXRoceMH",
      "server": "HOneeINfq",
      "tree_data": [
          {
              "name": "ent_treeWater2v1",
              "x": 3784,
              "y": 2800,
              "lastChop": 1710964630734
          },
          {
              "name": "ent_treeWater3v3",
              "x": 3672,
              "y": 3008,
              "lastChop": 1710964605311
          },
          {
              "name": "ent_treeWater2v3",
              "x": 3664,
              "y": 2960,
              "lastChop": 1710964613738
          },
          {
              "name": "ent_treeWater1v3",
              "x": 3592,
              "y": 3024,
              "lastChop": 1710964596311
          },
          {
              "name": "ent_treeWater3v1",
              "x": 3784,
              "y": 2744,
              "lastChop": 1710964639140
          }
      ]
  },
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "Farm Land #512",
      "map_number": 512,
      "mapId": "pixelsNFTFarm-512",
      "roomId": "m8IoL5neo",
      "server": "ZNv0H5-kK",
      "tree_data": [
          {
              "name": "ent_treeSpace3v2",
              "x": 3712,
              "y": 1936,
              "lastChop": 1710964828430
          }
      ]
  },
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "Farm Land #518",
      "map_number": 518,
      "mapId": "pixelsNFTFarm-518",
      "roomId": "I9xOaew3M",
      "server": "ZNv0H5-kK",
      "tree_data": [
          {
              "name": "ent_treeWater1v2",
              "x": 2560,
              "y": 2416,
              "lastChop": 1710964545727
          },
          {
              "name": "ent_treeWater2v1",
              "x": 2520,
              "y": 2472,
              "lastChop": 1710964531923
          },
          {
              "name": "ent_treeWater4v2",
              "x": 2424,
              "y": 2344,
              "lastChop": 1710964539495
          },
          {
              "name": "ent_treeWater2v2",
              "x": 2616,
              "y": 2328,
              "lastChop": 1710964551472
          }
      ]
  },
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "Farm Land #537",
      "map_number": 537,
      "mapId": "pixelsNFTFarm-537",
      "roomId": "p4ZrZxnWX",
      "server": "QGdKgQ6H0",
      "tree_data": [
          {
              "name": "ent_treeLand3v1",
              "x": 3368,
              "y": 2976,
              "lastChop": 1710964806527
          }
      ]
  },
  {
      "use_permissions": [
          "Visitor",
          "Manager",
          "OWNER",
          "Guild"
      ],
      "farm_name": "PMTPRO VIET NAM",
      "map_number": 571,
      "mapId": "pixelsNFTFarm-571",
      "roomId": "uC8C-SXqk",
      "server": "a3IucwSfU",
      "tree_data": [
          {
              "name": "ent_treeLand1v2",
              "x": 3592,
              "y": 2496,
              "lastChop": 1710964725375
          },
          {
              "name": "ent_treeLand3v1",
              "x": 3632,
              "y": 2280,
              "lastChop": 1710964852569
          },
          {
              "name": "ent_treeLand3v2",
              "x": 3720,
              "y": 2328,
              "lastChop": 1710964840880
          },
          {
              "name": "ent_treeLand2v2",
              "x": 3648,
              "y": 2344,
              "lastChop": 1710964831988
          },
          {
              "name": "ent_treeLand2v3",
              "x": 3472,
              "y": 2352,
              "lastChop": 1710964716440
          },
          {
              "name": "ent_treeLand4v1",
              "x": 3392,
              "y": 2504,
              "lastChop": 1710964798570
          },
          {
              "name": "ent_treeLand4v3",
              "x": 3496,
              "y": 2416,
              "lastChop": 1710964806292
          },
          {
              "name": "ent_treeLand2v1",
              "x": 3656,
              "y": 2504,
              "lastChop": 1710964819228
          },
          {
              "name": "ent_treeLand3v3",
              "x": 3536,
              "y": 2328,
              "lastChop": 1710964835179
          },
          {
              "name": "ent_treeLand1v3",
              "x": 3592,
              "y": 2416,
              "lastChop": 1710964833682
          },
          {
              "name": "ent_treeLand1v1",
              "x": 3536,
              "y": 2544,
              "lastChop": 1710964778309
          },
          {
              "name": "ent_treeLand3v2",
              "x": 3536,
              "y": 2248,
              "lastChop": 1710964866143
          },
          {
              "name": "ent_treeLand4v2",
              "x": 3504,
              "y": 2472,
              "lastChop": 1710964777968
          },
          {
              "name": "ent_treeLand2v1",
              "x": 3656,
              "y": 2440,
              "lastChop": 1710964824549
          },
          {
              "name": "ent_treeLand2v2",
              "x": 3656,
              "y": 2552,
              "lastChop": 1710964743623
          },
          {
              "name": "ent_treeLand4v3",
              "x": 3584,
              "y": 2536,
              "lastChop": 1710964725557
          },
          {
              "name": "ent_treeLand3v3",
              "x": 3696,
              "y": 2256,
              "lastChop": 1710964853569
          },
          {
              "name": "ent_treeLand4v2",
              "x": 3408,
              "y": 2344,
              "lastChop": 1710964716239
          },
          {
              "name": "ent_treeLand1v3",
              "x": 3720,
              "y": 2480,
              "lastChop": 1710964744860
          },
          {
              "name": "ent_treeLand3v1",
              "x": 3576,
              "y": 2280,
              "lastChop": 1710964869168
          },
          {
              "name": "ent_treeLand4v1",
              "x": 3720,
              "y": 2424,
              "lastChop": 1710964766940
          },
          {
              "name": "ent_treeLand1v1",
              "x": 3432,
              "y": 2432,
              "lastChop": 1710964806520
          },
          {
              "name": "ent_treeLand1v2",
              "x": 3456,
              "y": 2520,
              "lastChop": 1710964795721
          },
          {
              "name": "ent_treeLand2v3",
              "x": 3696,
              "y": 2656,
              "lastChop": 1710964756019
          }
      ]
  },
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "❤️Managed by Yobilka❤️",
      "map_number": 581,
      "mapId": "pixelsNFTFarm-581",
      "roomId": "l3IX3k0p-",
      "server": "UJQKH9buX",
      "tree_data": [
          {
              "name": "ent_treeWater2v1",
              "x": 3784,
              "y": 2496,
              "lastChop": 1710964501675
          },
          {
              "name": "ent_treeWater4v2",
              "x": 3960,
              "y": 2464,
              "lastChop": 1710964536616
          },
          {
              "name": "ent_treeWater1v1",
              "x": 3784,
              "y": 2464,
              "lastChop": 1710964503936
          },
          {
              "name": "ent_treeWater2v3",
              "x": 3688,
              "y": 2496,
              "lastChop": 1710964509949
          },
          {
              "name": "ent_treeWater3v3",
              "x": 3688,
              "y": 2528,
              "lastChop": 1710964509305
          },
          {
              "name": "ent_treeWater2v1",
              "x": 3880,
              "y": 2496,
              "lastChop": 1710964512846
          },
          {
              "name": "ent_treeWater4v1",
              "x": 3864,
              "y": 2432,
              "lastChop": 1710964521807
          },
          {
              "name": "ent_treeWater1v1",
              "x": 3880,
              "y": 2464,
              "lastChop": 1710964515522
          },
          {
              "name": "ent_treeWater4v1",
              "x": 3768,
              "y": 2432,
              "lastChop": 1710964529430
          },
          {
              "name": "ent_treeWater3v1",
              "x": 3880,
              "y": 2528,
              "lastChop": 1710964495131
          }
      ]
  },
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "sickle",
      "map_number": 589,
      "mapId": "pixelsNFTFarm-589",
      "roomId": "h2yDjNmHx",
      "server": "MkeUt1AFm",
      "tree_data": [
          {
              "name": "ent_treeWater2v3",
              "x": 3624,
              "y": 2800,
              "lastChop": 1710964494857
          },
          {
              "name": "ent_treeWater2v2",
              "x": 3616,
              "y": 2728,
              "lastChop": 1710964502211
          }
      ]
  },
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "Water 3x BBQ | xyZ",
      "map_number": 595,
      "mapId": "pixelsNFTFarm-595",
      "roomId": "Kwmh0VqBp",
      "server": "T8g2_5EvB",
      "tree_data": [
          {
              "name": "ent_treeWater3v1",
              "x": 3384,
              "y": 2248,
              "lastChop": 1710964642623
          },
          {
              "name": "ent_treeWater3v2",
              "x": 3576,
              "y": 2224,
              "lastChop": 1710964636506
          },
          {
              "name": "ent_treeWater4v2",
              "x": 2648,
              "y": 2568,
              "lastChop": 1710964613423
          },
          {
              "name": "ent_treeWater3v3",
              "x": 3520,
              "y": 2272,
              "lastChop": 1710964634947
          },
          {
              "name": "ent_treeWater1v1",
              "x": 2928,
              "y": 2168,
              "lastChop": 1710964624775
          }
      ]
  },
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "WATER 4SLUGS MILL TREES",
      "map_number": 648,
      "mapId": "pixelsNFTFarm-648",
      "roomId": "zLTHQXUCC",
      "server": "QglTDaUME",
      "tree_data": [
          {
              "name": "ent_treeWater4v3",
              "x": 3696,
              "y": 2752,
              "lastChop": 1710964698835
          },
          {
              "name": "ent_treeWater2v1",
              "x": 3696,
              "y": 2776,
              "lastChop": 1710964692525
          },
          {
              "name": "ent_treeWater3v1",
              "x": 3664,
              "y": 2800,
              "lastChop": 1710964709153
          }
      ]
  },
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "Juice Team 5 wood",
      "map_number": 654,
      "mapId": "pixelsNFTFarm-654",
      "roomId": "yqfCN0VM8",
      "server": "ONTheoA8T",
      "tree_data": [
          {
              "name": "ent_treeLand1v1",
              "x": 2496,
              "y": 2600,
              "lastChop": 1710964792205
          },
          {
              "name": "ent_treeLand4v3",
              "x": 2856,
              "y": 3000,
              "lastChop": 1710964537272
          }
      ]
  },
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "Farm Land #683",
      "map_number": 683,
      "mapId": "pixelsNFTFarm-683",
      "roomId": "YeInJamE3",
      "server": "rcKhr7WcR",
      "tree_data": [
          {
              "name": "ent_treeLand2v1",
              "x": 2856,
              "y": 1888,
              "lastChop": 1710964843305
          },
          {
              "name": "ent_treeLand4v3",
              "x": 2880,
              "y": 1968,
              "lastChop": 1710964836558
          }
      ]
  },
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "Farm Land #700",
      "map_number": 700,
      "mapId": "pixelsNFTFarm-700",
      "roomId": "9FG0FTN7w",
      "server": "EpJ-0QEyA",
      "tree_data": [
          {
              "name": "ent_treeLand3v3",
              "x": 3792,
              "y": 1952,
              "lastChop": 1710964677286
          }
      ]
  },
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "ANATA #717",
      "map_number": 717,
      "mapId": "pixelsNFTFarm-717",
      "roomId": "mVPKEKXvf",
      "server": "QglTDaUME",
      "tree_data": [
          {
              "name": "ent_treeWater2v3",
              "x": 2736,
              "y": 2736,
              "lastChop": 1710964524521
          },
          {
              "name": "ent_treeWater2v1",
              "x": 2872,
              "y": 2776,
              "lastChop": 1710964561076
          },
          {
              "name": "ent_treeWater4v3",
              "x": 3376,
              "y": 3040,
              "lastChop": 1710964537953
          }
      ]
  },
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "2Phoenix2",
      "map_number": 812,
      "mapId": "pixelsNFTFarm-812",
      "roomId": "Fxjx-SGC5",
      "server": "QglTDaUME",
      "tree_data": [
          {
              "name": "ent_treeWater3v1",
              "x": 3184,
              "y": 2480,
              "lastChop": 1710964597275
          }
      ]
  },
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "ARTiLands #844",
      "map_number": 844,
      "mapId": "pixelsNFTFarm-844",
      "roomId": "bDSc15v4Q",
      "server": "IAQtGkha2",
      "tree_data": [
          {
              "name": "ent_treeWater3v3",
              "x": 3640,
              "y": 1912,
              "lastChop": 1710964840479
          },
          {
              "name": "ent_treeWater4v2",
              "x": 2984,
              "y": 2520,
              "lastChop": 1710964760488
          },
          {
              "name": "ent_treeWater3v1",
              "x": 3720,
              "y": 1920,
              "lastChop": 1710964834998
          },
          {
              "name": "ent_treeWater4v1",
              "x": 2984,
              "y": 2480,
              "lastChop": 1710964765544
          }
      ]
  },
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "Farm Land #868",
      "map_number": 868,
      "mapId": "pixelsNFTFarm-868",
      "roomId": "AtADj5PFW",
      "server": "QGdKgQ6H0",
      "tree_data": [
          {
              "name": "ent_treeLand3v3",
              "x": 3792,
              "y": 1952,
              "lastChop": 1710964519492
          },
          {
              "name": "ent_treeLand1v3",
              "x": 2720,
              "y": 2000,
              "lastChop": 1710964545203
          },
          {
              "name": "ent_treeLand3v1",
              "x": 3592,
              "y": 2008,
              "lastChop": 1710964506988
          },
          {
              "name": "ent_treeLand3v2",
              "x": 3824,
              "y": 2000,
              "lastChop": 1710964522560
          },
          {
              "name": "ent_treeLand3v3",
              "x": 3680,
              "y": 2000,
              "lastChop": 1710964501595
          },
          {
              "name": "ent_treeLand3v2",
              "x": 3528,
              "y": 1944,
              "lastChop": 1710964513101
          },
          {
              "name": "ent_treeLand2v1",
              "x": 2856,
              "y": 1888,
              "lastChop": 1710964549761
          },
          {
              "name": "ent_treeLand3v1",
              "x": 3688,
              "y": 1888,
              "lastChop": 1710964526385
          }
      ]
  },
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "Farm Land #884",
      "map_number": 884,
      "mapId": "pixelsNFTFarm-884",
      "roomId": "lSWB269X6",
      "server": "5WSiW-y_p",
      "tree_data": [
          {
              "name": "ent_treeLand3v3",
              "x": 3600,
              "y": 2232,
              "lastChop": 1710964658387
          },
          {
              "name": "ent_treeLand3v1",
              "x": 3472,
              "y": 2232,
              "lastChop": 1710964658023
          },
          {
              "name": "ent_treeLand1v1",
              "x": 3024,
              "y": 2144,
              "lastChop": 1710964663406
          },
          {
              "name": "ent_treeLand3v2",
              "x": 3568,
              "y": 2176,
              "lastChop": 1710964657830
          }
      ]
  },
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "Farm Land #885",
      "map_number": 885,
      "mapId": "pixelsNFTFarm-885",
      "roomId": "pbMKdTzsT",
      "server": "MkeUt1AFm",
      "tree_data": [
          {
              "name": "ent_treeWater3v3",
              "x": 3808,
              "y": 1952,
              "lastChop": 1710964618871
          },
          {
              "name": "ent_treeWater3v2",
              "x": 3688,
              "y": 1912,
              "lastChop": 1710964612620
          }
      ]
  },
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "Farm Land #886",
      "map_number": 886,
      "mapId": "pixelsNFTFarm-886",
      "roomId": "IvlduMxWr",
      "server": "bcBoh5H2V",
      "tree_data": [
          {
              "name": "ent_treeWater4v3",
              "x": 3008,
              "y": 2984,
              "lastChop": 1710964692818
          },
          {
              "name": "ent_treeWater1v1",
              "x": 3640,
              "y": 2840,
              "lastChop": 1710964767091
          },
          {
              "name": "ent_treeWater4v1",
              "x": 3288,
              "y": 2832,
              "lastChop": 1710964701143
          }
      ]
  },
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "Farm Land #906",
      "map_number": 906,
      "mapId": "pixelsNFTFarm-906",
      "roomId": "-7f3vdYeS",
      "server": "rcKhr7WcR",
      "tree_data": [
          {
              "name": "ent_treeSpace1v2",
              "x": 2568,
              "y": 2536,
              "lastChop": 1710964802126
          },
          {
              "name": "ent_treeSpace4v2",
              "x": 2440,
              "y": 2456,
              "lastChop": 1710964809666
          },
          {
              "name": "ent_treeSpace2v1",
              "x": 2504,
              "y": 2360,
              "lastChop": 1710964815742
          }
      ]
  },
  {
      "use_permissions": [
          "Visitor",
          "Manager",
          "OWNER",
          "Guild"
      ],
      "farm_name": "pixelbro Galactic Grills #915",
      "map_number": 915,
      "mapId": "pixelsNFTFarm-915",
      "roomId": "t8AOEmpIK",
      "server": "MkeUt1AFm",
      "tree_data": [
          {
              "name": "ent_treeSpace3v1",
              "x": 2832,
              "y": 2536,
              "lastChop": 1710964633688
          },
          {
              "name": "ent_treeSpace3v3",
              "x": 2832,
              "y": 2576,
              "lastChop": 1710964633422
          },
          {
              "name": "ent_treeSpace3v2",
              "x": 2832,
              "y": 2856,
              "lastChop": 1710964613993
          },
          {
              "name": "ent_treeSpace2v1",
              "x": 2688,
              "y": 2776,
              "lastChop": 1710964624004
          }
      ]
  },
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "Farm Land #929",
      "map_number": 929,
      "mapId": "pixelsNFTFarm-929",
      "roomId": "LSCfV5d-9",
      "server": "x03vgmm_P",
      "tree_data": [
          {
              "name": "ent_treeSpace1v2",
              "x": 3600,
              "y": 2752,
              "lastChop": 1710964675092
          },
          {
              "name": "ent_treeSpace2v2",
              "x": 3600,
              "y": 2800,
              "lastChop": 1710964674800
          },
          {
              "name": "ent_treeSpace3v2",
              "x": 3600,
              "y": 2728,
              "lastChop": 1710964677387
          }
      ]
  },
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "Farm Land #943",
      "map_number": 943,
      "mapId": "pixelsNFTFarm-943",
      "roomId": "4lzT48O8P",
      "server": "CSeFYRu13",
      "tree_data": [
          {
              "name": "ent_treeWater4v3",
              "x": 3008,
              "y": 2984,
              "lastChop": 1710964880657
          }
      ]
  },
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "Farm Land #977",
      "map_number": 977,
      "mapId": "pixelsNFTFarm-977",
      "roomId": "TUCrv18Xu",
      "server": "PU1lmzIf8",
      "tree_data": [
          {
              "name": "ent_treeLand4v2",
              "x": 2432,
              "y": 2504,
              "lastChop": 1710964886146
          },
          {
              "name": "ent_treeLand1v1",
              "x": 2496,
              "y": 2600,
              "lastChop": 1710964879502
          }
      ]
  },
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "OM waterpark",
      "map_number": 999,
      "mapId": "pixelsNFTFarm-999",
      "roomId": "7CEoSJnlo",
      "server": "ZRPIV6WWZ",
      "tree_data": [
          {
              "name": "ent_treeWater1v1",
              "x": 3160,
              "y": 2888,
              "lastChop": 1710964892851
          }
      ]
  },
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "Farm Land #29",
      "map_number": 29,
      "mapId": "pixelsNFTFarm-29",
      "roomId": "l6LHOEx_L",
      "server": "8G5i6_QGo",
      "tree_data": [
          {
              "name": "ent_treeWater3v2",
              "x": 3688,
              "y": 1912,
              "lastChop": 1710964548704
          },
          {
              "name": "ent_treeWater2v2",
              "x": 2616,
              "y": 2328,
              "lastChop": 1710964615620
          }
      ]
  },
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "Farm Land #40",
      "map_number": 40,
      "mapId": "pixelsNFTFarm-40",
      "roomId": "TdzxzT9Lf",
      "server": "EAuePbga5",
      "tree_data": [
          {
              "name": "ent_treeLand2v1",
              "x": 3144,
              "y": 1968,
              "lastChop": 1710964877556
          },
          {
              "name": "ent_treeLand4v3",
              "x": 3136,
              "y": 3024,
              "lastChop": 1710964770417
          }
      ]
  },
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "Farm Land #44",
      "map_number": 44,
      "mapId": "pixelsNFTFarm-44",
      "roomId": "F9dHMl0Ky",
      "server": "WCiTQy9o-",
      "tree_data": [
          {
              "name": "ent_treeWater4v3",
              "x": 3072,
              "y": 2144,
              "lastChop": 1710964873946
          },
          {
              "name": "ent_treeWater2v3",
              "x": 3408,
              "y": 3016,
              "lastChop": 1710964802337
          },
          {
              "name": "ent_treeWater2v1",
              "x": 3016,
              "y": 2208,
              "lastChop": 1710964880529
          },
          {
              "name": "ent_treeWater1v1",
              "x": 3648,
              "y": 2944,
              "lastChop": 1710964808422
          },
          {
              "name": "ent_treeWater3v3",
              "x": 3520,
              "y": 2272,
              "lastChop": 1710964892400
          },
          {
              "name": "ent_treeWater1v1",
              "x": 2928,
              "y": 2168,
              "lastChop": 1710964878571
          },
          {
              "name": "ent_treeWater1v3",
              "x": 3464,
              "y": 3056,
              "lastChop": 1710964797868
          }
      ]
  },
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "Farm Land #56",
      "map_number": 56,
      "mapId": "pixelsNFTFarm-56",
      "roomId": "l7lejQYte",
      "server": "9pthxscHH",
      "tree_data": [
          {
              "name": "ent_treeWater3v3",
              "x": 3728,
              "y": 2000,
              "lastChop": 1710964605737
          },
          {
              "name": "ent_treeWater3v1",
              "x": 3592,
              "y": 2016,
              "lastChop": 1710964597245
          }
      ]
  },
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "Farm Land #61",
      "map_number": 61,
      "mapId": "pixelsNFTFarm-61",
      "roomId": "1hheA0dF2",
      "server": "afXFFLRhO",
      "tree_data": [
          {
              "name": "ent_treeWater2v2",
              "x": 2488,
              "y": 2688,
              "lastChop": 1710964661033
          }
      ]
  },
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "Farm Land #65",
      "map_number": 65,
      "mapId": "pixelsNFTFarm-65",
      "roomId": "Gl9xDiQ5g",
      "server": "fRnLp22YW",
      "tree_data": [
          {
              "name": "ent_treeSpace3v3",
              "x": 3568,
              "y": 1936,
              "lastChop": 1710964597099
          }
      ]
  },
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "Farm Land #76",
      "map_number": 76,
      "mapId": "pixelsNFTFarm-76",
      "roomId": "R8242Tu9m",
      "server": "YX-GgkWPj",
      "tree_data": [
          {
              "name": "ent_treeWater2v1",
              "x": 2520,
              "y": 2472,
              "lastChop": 1710964871340
          },
          {
              "name": "ent_treeWater2v1",
              "x": 2760,
              "y": 1912,
              "lastChop": 1710964858228
          },
          {
              "name": "ent_treeWater4v3",
              "x": 2816,
              "y": 2016,
              "lastChop": 1710964853651
          },
          {
              "name": "ent_treeWater2v2",
              "x": 2616,
              "y": 2328,
              "lastChop": 1710964864778
          },
          {
              "name": "ent_treeWater1v1",
              "x": 2928,
              "y": 1864,
              "lastChop": 1710964851261
          },
          {
              "name": "ent_treeWater4v2",
              "x": 3936,
              "y": 2408,
              "lastChop": 1710964801564
          },
          {
              "name": "ent_treeWater1v2",
              "x": 4000,
              "y": 2216,
              "lastChop": 1710964814190
          },
          {
              "name": "ent_treeWater2v2",
              "x": 3952,
              "y": 2272,
              "lastChop": 1710964808866
          },
          {
              "name": "ent_treeWater2v3",
              "x": 2984,
              "y": 1984,
              "lastChop": 1710964846114
          }
      ]
  },
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "Farm Land #78",
      "map_number": 78,
      "mapId": "pixelsNFTFarm-78",
      "roomId": "uwkU8e7BC",
      "server": "N80ZW0QTy",
      "tree_data": [
          {
              "name": "ent_treeWater1v1",
              "x": 3640,
              "y": 2840,
              "lastChop": 1710964628703
          }
      ]
  },
  {
      "use_permissions": [
          "Visitor",
          "Manager",
          "OWNER"
      ],
      "farm_name": "Welcome to Land 100!",
      "map_number": 100,
      "mapId": "pixelsNFTFarm-100",
      "roomId": "yikysuG87",
      "server": "q3dMfu9Ld",
      "tree_data": [
          {
              "name": "ent_treeLand2v3",
              "x": 2800,
              "y": 2592,
              "lastChop": 1710964663001
          },
          {
              "name": "ent_treeLand4v1",
              "x": 2840,
              "y": 2520,
              "lastChop": 1710964666342
          },
          {
              "name": "ent_treeLand2v3",
              "x": 3024,
              "y": 2544,
              "lastChop": 1710964673080
          },
          {
              "name": "ent_treeLand1v1",
              "x": 3024,
              "y": 2592,
              "lastChop": 1710964674220
          },
          {
              "name": "ent_treeLand4v2",
              "x": 2896,
              "y": 2592,
              "lastChop": 1710964669053
          },
          {
              "name": "ent_treeLand3v1",
              "x": 2968,
              "y": 2568,
              "lastChop": 1710964670906
          },
          {
              "name": "ent_treeLand4v2",
              "x": 2952,
              "y": 2616,
              "lastChop": 1710964669696
          },
          {
              "name": "ent_treeLand1v1",
              "x": 2800,
              "y": 2520,
              "lastChop": 1710964679889
          },
          {
              "name": "ent_treeLand3v3",
              "x": 3024,
              "y": 2616,
              "lastChop": 1710964679010
          },
          {
              "name": "ent_treeLand1v3",
              "x": 3024,
              "y": 2520,
              "lastChop": 1710964672499
          },
          {
              "name": "ent_treeLand1v3",
              "x": 3024,
              "y": 2568,
              "lastChop": 1710964673665
          },
          {
              "name": "ent_treeLand2v2",
              "x": 2800,
              "y": 2616,
              "lastChop": 1710964663552
          },
          {
              "name": "ent_treeLand3v2",
              "x": 2968,
              "y": 2544,
              "lastChop": 1710964671388
          },
          {
              "name": "ent_treeLand4v1",
              "x": 2896,
              "y": 2568,
              "lastChop": 1710964668636
          },
          {
              "name": "ent_treeLand4v3",
              "x": 2840,
              "y": 2568,
              "lastChop": 1710964665501
          },
          {
              "name": "ent_treeLand2v1",
              "x": 2856,
              "y": 2544,
              "lastChop": 1710964665767
          },
          {
              "name": "ent_treeLand2v2",
              "x": 2912,
              "y": 2544,
              "lastChop": 1710964667748
          },
          {
              "name": "ent_treeLand1v2",
              "x": 2968,
              "y": 2520,
              "lastChop": 1710964672006
          },
          {
              "name": "ent_treeLand2v1",
              "x": 2856,
              "y": 2592,
              "lastChop": 1710964664687
          },
          {
              "name": "ent_treeLand3v2",
              "x": 2800,
              "y": 2568,
              "lastChop": 1710964676443
          },
          {
              "name": "ent_treeLand1v2",
              "x": 2800,
              "y": 2544,
              "lastChop": 1710964660101
          },
          {
              "name": "ent_treeLand4v3",
              "x": 2896,
              "y": 2520,
              "lastChop": 1710964666914
          },
          {
              "name": "ent_treeLand3v3",
              "x": 2968,
              "y": 2592,
              "lastChop": 1710964670370
          },
          {
              "name": "ent_treeLand3v1",
              "x": 2856,
              "y": 2616,
              "lastChop": 1710964664131
          }
      ]
  },
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "Farm Land #162",
      "map_number": 162,
      "mapId": "pixelsNFTFarm-162",
      "roomId": "zcomfP1UL",
      "server": "EpJ-0QEyA",
      "tree_data": [
          {
              "name": "ent_treeLand1v2",
              "x": 2632,
              "y": 2352,
              "lastChop": 1710964824803
          },
          {
              "name": "ent_treeLand4v1",
              "x": 3032,
              "y": 1856,
              "lastChop": 1710964838964
          },
          {
              "name": "ent_treeLand4v2",
              "x": 2432,
              "y": 2504,
              "lastChop": 1710964817396
          },
          {
              "name": "ent_treeLand1v1",
              "x": 2496,
              "y": 2600,
              "lastChop": 1710964809945
          }
      ]
  },
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "Mine Street 190-198",
      "map_number": 194,
      "mapId": "pixelsNFTFarm-194",
      "roomId": "kPIrA2pPB",
      "server": "U0r5XpuK_",
      "tree_data": [
          {
              "name": "ent_treeLand1v1",
              "x": 3688,
              "y": 2768,
              "lastChop": 1710964538727
          }
      ]
  },
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "Saul's space Land #204",
      "map_number": 204,
      "mapId": "pixelsNFTFarm-204",
      "roomId": "5dg0rCgdo",
      "server": "KtgcT1LH8",
      "tree_data": [
          {
              "name": "ent_treeSpace3v3",
              "x": 3680,
              "y": 2752,
              "lastChop": 1710964516671
          },
          {
              "name": "ent_treeSpace3v3",
              "x": 3680,
              "y": 2672,
              "lastChop": 1710964519089
          },
          {
              "name": "ent_treeSpace4v3",
              "x": 3672,
              "y": 2640,
              "lastChop": 1710964523065
          },
          {
              "name": "ent_treeSpace4v1",
              "x": 3744,
              "y": 2648,
              "lastChop": 1710964543294
          },
          {
              "name": "ent_treeSpace2v3",
              "x": 3760,
              "y": 2768,
              "lastChop": 1710964541473
          }
      ]
  },
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "Farm Land #207",
      "map_number": 207,
      "mapId": "pixelsNFTFarm-207",
      "roomId": "HhHR9C8T0",
      "server": "a3IucwSfU",
      "tree_data": [
          {
              "name": "ent_treeLand4v3",
              "x": 2872,
              "y": 2976,
              "lastChop": 1710964664917
          },
          {
              "name": "ent_treeLand1v3",
              "x": 2848,
              "y": 3008,
              "lastChop": 1710964662506
          },
          {
              "name": "ent_treeLand1v1",
              "x": 3064,
              "y": 3048,
              "lastChop": 1710964629936
          },
          {
              "name": "ent_treeLand4v2",
              "x": 3080,
              "y": 3008,
              "lastChop": 1710964627507
          },
          {
              "name": "ent_treeLand2v3",
              "x": 2920,
              "y": 3040,
              "lastChop": 1710964651258
          }
      ]
  },
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "Farm Land #213",
      "map_number": 213,
      "mapId": "pixelsNFTFarm-213",
      "roomId": "Zom5XmsES",
      "server": "iW2byI-DE",
      "tree_data": [
          {
              "name": "ent_treeSpace4v1",
              "x": 2544,
              "y": 2744,
              "lastChop": 1710964648251
          },
          {
              "name": "ent_treeSpace1v1",
              "x": 2656,
              "y": 2616,
              "lastChop": 1710964670215
          },
          {
              "name": "ent_treeSpace1v3",
              "x": 2688,
              "y": 2728,
              "lastChop": 1710964644739
          },
          {
              "name": "ent_treeSpace3v1",
              "x": 2872,
              "y": 2528,
              "lastChop": 1710964684038
          },
          {
              "name": "ent_treeSpace3v2",
              "x": 2824,
              "y": 2544,
              "lastChop": 1710964694930
          },
          {
              "name": "ent_treeSpace4v1",
              "x": 2704,
              "y": 2672,
              "lastChop": 1710964675484
          },
          {
              "name": "ent_treeSpace4v3",
              "x": 2824,
              "y": 2624,
              "lastChop": 1710964655977
          },
          {
              "name": "ent_treeSpace1v1",
              "x": 2712,
              "y": 2576,
              "lastChop": 1710964732257
          },
          {
              "name": "ent_treeSpace3v2",
              "x": 2904,
              "y": 2504,
              "lastChop": 1710964717165
          },
          {
              "name": "ent_treeSpace2v1",
              "x": 2792,
              "y": 2744,
              "lastChop": 1710964624145
          },
          {
              "name": "ent_treeSpace4v3",
              "x": 2936,
              "y": 2512,
              "lastChop": 1710964690093
          },
          {
              "name": "ent_treeSpace3v1",
              "x": 2824,
              "y": 2488,
              "lastChop": 1710964702493
          },
          {
              "name": "ent_treeSpace4v2",
              "x": 2728,
              "y": 2640,
              "lastChop": 1710964675496
          },
          {
              "name": "ent_treeSpace1v2",
              "x": 2608,
              "y": 2736,
              "lastChop": 1710964638395
          },
          {
              "name": "ent_treeSpace2v3",
              "x": 2824,
              "y": 2520,
              "lastChop": 1710964697151
          },
          {
              "name": "ent_treeSpace1v3",
              "x": 2768,
              "y": 2584,
              "lastChop": 1710964730039
          },
          {
              "name": "ent_treeSpace3v3",
              "x": 2864,
              "y": 2464,
              "lastChop": 1710964712058
          },
          {
              "name": "ent_treeSpace2v1",
              "x": 2912,
              "y": 2456,
              "lastChop": 1710964721669
          },
          {
              "name": "ent_treeSpace4v2",
              "x": 2608,
              "y": 2680,
              "lastChop": 1710964666903
          },
          {
              "name": "ent_treeSpace2v3",
              "x": 2824,
              "y": 2712,
              "lastChop": 1710964660073
          },
          {
              "name": "ent_treeSpace1v2",
              "x": 2744,
              "y": 2504,
              "lastChop": 1710964726404
          },
          {
              "name": "ent_treeSpace3v3",
              "x": 2952,
              "y": 2488,
              "lastChop": 1710964718632
          },
          {
              "name": "ent_treeSpace2v2",
              "x": 2768,
              "y": 2712,
              "lastChop": 1710964626111
          },
          {
              "name": "ent_treeSpace2v2",
              "x": 2768,
              "y": 2552,
              "lastChop": 1710964705321
          }
      ]
  },
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "Farm Land #214",
      "map_number": 214,
      "mapId": "pixelsNFTFarm-214",
      "roomId": "ASeewv13e",
      "server": "MkeUt1AFm",
      "tree_data": [
          {
              "name": "ent_treeSpace2v1",
              "x": 2504,
              "y": 2360,
              "lastChop": 1710964738474
          }
      ]
  },
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "Farm Land #228",
      "map_number": 228,
      "mapId": "pixelsNFTFarm-228",
      "roomId": "JoJNGkUwD",
      "server": "vb_0thSJY",
      "tree_data": [
          {
              "name": "ent_treeLand2v2",
              "x": 3680,
              "y": 2600,
              "lastChop": 1710964763524
          }
      ]
  },
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "NEW WOLRD (space)",
      "map_number": 233,
      "mapId": "pixelsNFTFarm-233",
      "roomId": "0gjlXcXgG",
      "server": "U0r5XpuK_",
      "tree_data": [
          {
              "name": "ent_treeSpace3v3",
              "x": 2432,
              "y": 2632,
              "lastChop": 1710964763699
          },
          {
              "name": "ent_treeSpace2v3",
              "x": 2432,
              "y": 2608,
              "lastChop": 1710964771742
          },
          {
              "name": "ent_treeSpace1v3",
              "x": 2432,
              "y": 2560,
              "lastChop": 1710964807882
          },
          {
              "name": "ent_treeSpace3v3",
              "x": 2432,
              "y": 2656,
              "lastChop": 1710964757306
          },
          {
              "name": "ent_treeSpace2v3",
              "x": 2432,
              "y": 2584,
              "lastChop": 1710964779644
          }
      ]
  },
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "Farm Land #249",
      "map_number": 249,
      "mapId": "pixelsNFTFarm-249",
      "roomId": "oZnZDhO6P",
      "server": "EAuePbga5",
      "tree_data": [
          {
              "name": "ent_treeWater2v1",
              "x": 2520,
              "y": 2472,
              "lastChop": 1710964740165
          }
      ]
  },
  {
      "use_permissions": [
          "ANY"
      ],
      "farm_name": "3 kilns windmill #272",
      "map_number": 272,
      "mapId": "pixelsNFTFarm-272",
      "roomId": "8FsZMjvEC",
      "server": "XLcWbq74V",
      "tree_data": [
          {
              "name": "ent_treeLand2v3",
              "x": 2680,
              "y": 2584,
              "lastChop": 1710964858006
          },
          {
              "name": "ent_treeLand4v3",
              "x": 2608,
              "y": 2672,
              "lastChop": 1710964853161
          },
          {
              "name": "ent_treeLand3v2",
              "x": 2696,
              "y": 2720,
              "lastChop": 1710964846018
          },
          {
              "name": "ent_treeLand3v3",
              "x": 2752,
              "y": 2800,
              "lastChop": 1710964849067
          }
      ]
  }
];

function Home(){


    const [data,setData] = useState([]);

    useEffect(()=>{

      fetch('https://pixels-usefull-tools-backend-production.up.railway.app/tracker/tree/next',{
        method:"GET"
      }).then(response=> response.json())
        .then(json=>{
          setData(json); 
      }).catch(error => console.log(error))

    },[]);
    
    
    return(
           <div>
                <NavBar/>
                <br/><br/><br/><br/><br/><br/>
                <div className="lands-container">
                    <div>
                        {
                            data.map((element,index)=> <ExpandedButton
                            key={index}
                            className='land-top'
                            isOpen={true}
                            text={`Farm Land ${element.mapId.split('-')[1]}`}
                            childs={[
                                <div className="table-container">
                                    <table className='tuple'>
                                        <tbody>
                                            <tr>
                                                <th className='tuple-element font-color-black'>Num</th>
                                                <th className='tuple-element font-color-black'>Respawn at</th>
                                                <th className='tuple-element font-color-black'>Remaining Time</th>
                                            </tr>
                                            {
                                            element.tree_data.map((tree,i) => <TreeTuple key={i} index={i} timestamp={tree.lastChop}/>)
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                ]}
                        />
                        )
                        }
                    </div>
                </div>
           </div>    
    );

}


export default Home;