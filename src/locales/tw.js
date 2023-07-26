const areaTypes = {
  taiwan: '台灣',
  others: '其他國家'
}
const areaList = {
  KLU: '基隆市',
  TPE: '臺北市',
  TPH: '新北市',
  TYC: '桃園市',
  HSC: '新竹市',
  HSH: '新竹縣',
  MAL: '苗栗縣',
  TXG: '臺中市',
  CWH: '彰化縣',
  NTO: '南投縣',
  YLH: '雲林縣',
  CYI: '嘉義市',
  CHY: '嘉義縣',
  TNN: '臺南市',
  KHH: '高雄市',
  IUH: '屏東縣',
  ILN: '宜蘭縣',
  HWA: '花蓮縣',
  TTT: '臺東縣',
  PEH: '澎湖縣',
  KMN: '金門縣',
  LNN: '連江縣',
  BRN: 'Brunei',
  KHM: 'Cambodia',
  CHN: 'China',
  HKG: 'Hong Kong',
  MAC: 'Macao',
  IDN: 'Indonesia',
  JPN: 'Japan',
  LAO: 'Laos',
  MYS: 'Malaysia',
  MNG: 'Mongolia',
  MMR: 'Myanmar',
  PRK: 'North Korea',
  PHL: 'Philippines',
  SGP: 'Singapore',
  KOR: 'South Korea',
  THA: 'Thailand',
  TLS: 'Timor-Leste',
  VNM: 'Vietnam',
  AFG: 'Afghanistan',
  ALA: 'Aland Islands',
  ALB: 'Albania',
  DZA: 'Algeria',
  ASM: 'American Samoa',
  AND: 'Andorra',
  AGO: 'Angola',
  AIA: 'Anguilla',
  ATA: 'Antarctica',
  ATG: 'Antigua and Barbuda',
  ARG: 'Argentina',
  ARM: 'Armenia',
  AUS: 'Australia',
  AUT: 'Austria',
  AZE: 'Azerbaijan',
  BHS: 'Bahamas',
  BHR: 'Bahrain',
  BGD: 'Bangladesh',
  BRB: 'Barbados',
  BLR: 'Belarus',
  BEL: 'Belgium',
  BLZ: 'Belize',
  BEN: 'Benin',
  BTN: 'Bhutan',
  BOL: 'Bolivia',
  BIH: 'Bosnia and Herzegovina',
  BWA: 'Botswana',
  BVT: 'Bouvet Island',
  BRA: 'Brazil',
  VGB: 'British Virgin Islands',
  IOT: 'British Indian Ocean Territory',
  BGR: 'Bulgaria',
  BFA: 'Burkina Faso',
  BDI: 'Burundi',
  CMR: 'Cameroon',
  CAN: 'Canada',
  CPV: 'Cape Verde',
  CYM: 'Cayman Islands',
  CAF: 'Central African Republic',
  TCD: 'Chad',
  CHL: 'Chile',
  CXR: 'Christmas Island',
  CCK: 'Cocos (Keeling) Islands',
  COL: 'Colombia',
  COM: 'Comoros',
  COG: 'Congo (Brazzaville)',
  COD: 'Congo, (Kinshasa)',
  COK: 'Cook Islands',
  CRI: 'Costa Rica',
  CIV: "Côte d'Ivoire",
  HRV: 'Croatia',
  CUB: 'Cuba',
  CYP: 'Cyprus',
  CZE: 'Czechia (Czech Republic)',
  DNK: 'Denmark',
  DJI: 'Djibouti',
  DMA: 'Dominica',
  DOM: 'Dominican Republic',
  ECU: 'Ecuador',
  EGY: 'Egypt',
  SLV: 'El Salvador',
  GNQ: 'Equatorial Guinea',
  ERI: 'Eritrea',
  EST: 'Estonia',
  ETH: 'Ethiopia',
  FLK: 'Falkland Islands (Malvinas)',
  FRO: 'Faroe Islands',
  FJI: 'Fiji',
  FIN: 'Finland',
  FRA: 'France',
  GUF: 'French Guiana',
  PYF: 'French Polynesia',
  ATF: 'French Southern Territories',
  GAB: 'Gabon',
  GMB: 'Gambia',
  GEO: 'Georgia',
  DEU: 'Germany',
  GHA: 'Ghana',
  GIB: 'Gibraltar',
  GRC: 'Greece',
  GRL: 'Greenland',
  GRD: 'Grenada',
  GLP: 'Guadeloupe',
  GUM: 'Guam',
  GTM: 'Guatemala',
  GGY: 'Guernsey',
  GIN: 'Guinea',
  GNB: 'Guinea-Bissau',
  GUY: 'Guyana',
  HTI: 'Haiti',
  HMD: 'Heard and Mcdonald Islands',
  VAT: 'Holy See (Vatican City State)',
  HND: 'Honduras',
  HUN: 'Hungary',
  ISL: 'Iceland',
  IND: 'India',
  IRN: 'Iran',
  IRQ: 'Iraq',
  IRL: 'Ireland',
  IMN: 'Isle of Man',
  ISR: 'Israel',
  ITA: 'Italy',
  JAM: 'Jamaica',
  JEY: 'Jersey',
  JOR: 'Jordan',
  KAZ: 'Kazakhstan',
  KEN: 'Kenya',
  KIR: 'Kiribati',
  KWT: 'Kuwait',
  KGZ: 'Kyrgyzstan',
  LVA: 'Latvia',
  LBN: 'Lebanon',
  LSO: 'Lesotho',
  LBR: 'Liberia',
  LBY: 'Libya',
  LIE: 'Liechtenstein',
  LTU: 'Lithuania',
  LUX: 'Luxembourg',
  MKD: 'Republic of North Macedonia',
  MDG: 'Madagascar',
  MWI: 'Malawi',
  MDV: 'Maldives',
  MLI: 'Mali',
  MLT: 'Malta',
  MHL: 'Marshall Islands',
  MTQ: 'Martinique',
  MRT: 'Mauritania',
  MUS: 'Mauritius',
  MYT: 'Mayotte',
  MEX: 'Mexico',
  FSM: 'Micronesia',
  MDA: 'Moldova',
  MCO: 'Monaco',
  MNE: 'Montenegro',
  MSR: 'Montserrat',
  MAR: 'Morocco',
  MOZ: 'Mozambique',
  NAM: 'Namibia',
  NRU: 'Nauru',
  NPL: 'Nepal',
  NLD: 'Netherlands',
  ANT: 'Netherlands Antilles',
  NCL: 'New Caledonia',
  NZL: 'New Zealand',
  NIC: 'Nicaragua',
  NER: 'Niger',
  NGA: 'Nigeria',
  NIU: 'Niue',
  NFK: 'Norfolk Island',
  MNP: 'Northern Mariana Islands',
  NOR: 'Norway',
  OMN: 'Oman',
  PAK: 'Pakistan',
  PLW: 'Palau',
  PSE: 'Palestine State',
  PAN: 'Panama',
  PNG: 'Papua New Guinea',
  PRY: 'Paraguay',
  PER: 'Peru',
  PCN: 'Pitcairn',
  POL: 'Poland',
  PRT: 'Portugal',
  PRI: 'Puerto Rico',
  QAT: 'Qatar',
  REU: 'Réunion',
  ROU: 'Romania',
  RUS: 'Russia',
  RWA: 'Rwanda',
  BLM: 'Saint-Barthélemy',
  SHN: 'Saint Helena',
  KNA: 'Saint Kitts and Nevis',
  LCA: 'Saint Lucia',
  MAF: 'Saint-Martin (French part)',
  SPM: 'Saint Pierre and Miquelon',
  VCT: 'Saint Vincent and the Grenadines',
  WSM: 'Samoa',
  SMR: 'San Marino',
  STP: 'Sao Tome and Principe',
  SAU: 'Saudi Arabia',
  SEN: 'Senegal',
  SRB: 'Serbia',
  SYC: 'Seychelles',
  SLE: 'Sierra Leone',
  SVK: 'Slovakia',
  SVN: 'Slovenia',
  SLB: 'Solomon Islands',
  SOM: 'Somalia',
  ZAF: 'South Africa',
  SGS: 'South Georgia and the South Sandwich Islands',
  SSD: 'South Sudan',
  ESP: 'Spain',
  LKA: 'Sri Lanka',
  SDN: 'Sudan',
  SUR: 'Suriname',
  SJM: 'Svalbard and Jan Mayen Islands',
  SWZ: 'Swaziland',
  SWE: 'Sweden',
  CHE: 'Switzerland',
  SYR: 'Syrian Arab Republic (Syria)',
  TJK: 'Tajikistan',
  TZA: 'Tanzania',
  TGO: 'Togo',
  TKL: 'Tokelau',
  TON: 'Tonga',
  TTO: 'Trinidad and Tobago',
  TUN: 'Tunisia',
  TUR: 'Turkey',
  TKM: 'Turkmenistan',
  TCA: 'Turks and Caicos Islands',
  TUV: 'Tuvalu',
  UGA: 'Uganda',
  UKR: 'Ukraine',
  ARE: 'United Arab Emirates',
  GBR: 'United Kingdom',
  USA: 'United States of America',
  UMI: 'US Minor Outlying Islands',
  URY: 'Uruguay',
  UZB: 'Uzbekistan',
  VUT: 'Vanuatu',
  VEN: 'Venezuela (Bolivarian Republic)',
  VIR: 'Virgin Islands, US',
  WLF: 'Wallis and Futuna Islands',
  ESH: 'Western Sahara',
  YEM: 'Yemen',
  ZMB: 'Zambia',
  ZWE: 'Zimbabwe'
}

export default {
  map: {
    eventSiteButton: '2021新北市多元文化節活動網站',
    welcome: {
      subtitle: '存放這一代人的時間記憶',
      button: '母語歌採集計畫 Go!'
    },
    uploadButton: {
      text: ['上傳我的', '母語歌'],
      tooltips: ['4/30前上傳', '抽77張奶茶招待卷！']
    },
    filterPanel: {
      title: '母語歌歌單',
      marquee: '我們已經收集到{soundsCount}首母語歌。母語歌從各地遠道而來，總飛行里程為{distanceInKM}公里。',
      moods: {
        title: '心情主題',
        list: {
          all: '全部',
          miss: '思念 | 被珍藏在心裡面的',
          happy: '開心 | 想到心裡都暖暖的',
          sad: '傷感 | 致無法好好的過去',
          grievance: '不平 | 為那些受傷的歌唱',
          hope: '希望 | 那些對未來的期盼'
        }
      },
      langs: {
        title: '語言歌單',
        placeholder: '填寫母語歌的語言',
        list: {
          all: '全部',
          chinese: '華語',
          taiwanese: '台語',
          hakka: '客語',
          amis: '阿美族語',
          myanmar: '緬甸語',
          others: '其他'
        }
      },
      areas: {
        title: '地區歌單',
        content: '從哪裡來到新北市的母語歌',
        list: [
          '臺灣',
          '東亞',
          '世界',
          '全部'
        ]
      }
    },
    sound: {
      intro: '簡介',
      lyrics: '歌詞',
      name: '歌曲名稱',
      lang: '歌曲語言',
      location: '故事地點',
      story: '母語歌故事'
    },
    footer: {
      organizer: '主辦單位',
      implementer: '辦理單位',
      copyright: 'Copyright © 2021新北市多元文化節'
    }
  },
  login: {
    backButton: '先回去聽聽母語歌',
    dialog: {
      event: {
        activeButton: '關於活動',
        title: '關於活動',
        content: {
          desc1: '聽到「母語歌」三個字，腦海響起什麼旋律呢？',
          'desc2-1': '是社運街頭上，與夥伴一起揮灑的淚與汗；',
          'desc2-2': '是部落中，耆老傳唱的祖靈叮嚀；',
          'desc2-3': '還是長輩在午後時光，輕輕哼著的小曲？',
          'desc3-1': '「找找，不能忘記的母語歌」是2021新北市多元文化節系列活動。',
          'desc3-2': '本年度主題為「音樂」，期待透過線上母語歌地圖與大眾一同蒐集交流彼此的文化，邀請你分享那些刻在心底的時光，一起留下屬於這個時代的母語歌和故事。',
          sec1: {
            title: '一、活動時間',
            content: '2021/04/01-2021/4/30'
          },
          sec2: {
            title: '二、活動對象',
            content: '歡迎對分享母語歌及人生故事有興趣之民眾參與'
          },
          sec3: {
            title: '三、後續活動',
            content: [
              '歡迎關注「',
              '」官網，參加系列活動！'
            ],
            website: '新北市多元文化節'
          }
        },
        confirmButton: '我了解哩'
      },
      lottery: {
        activeButton: '抽獎辦法',
        title: '上傳母語歌故事抽好禮！',
        content: {
          desc: '為了鼓勵民眾踴躍分享母語歌故事，準備了緬甸街南洋奶茶券、多元文化繪本、移工文學等等抽獎品項，凡上傳者皆有機會抽到文化好禮喔～',
          sec1: '一、活動日期：2021/04/01-2021/4/30',
          sec2: {
            title: '二、活動辦法：',
            content: '上傳一次即獲得一次抽獎資格，多上傳多中獎！活動期間內，不限帳號，只要上傳一首母語歌故事，即獲得一次抽獎資格（同一帳號上傳兩首母語歌，即獲得兩次資格，以此類推），惟每一抽獎資格僅限獲獎一次（若有相同內容重複上傳者，該帳號取消參與資格）。'
          },
          sec3: {
            title: '三、活動獎項及名額：',
            content: {
              1: '緬甸街奶茶兌換卷，77名。',
              2: '「緬甸街美食航空活動」限量設計明信片一套（5張），1名。',
              3: '《鳴個喇吧》團隊設計出品之緬甸街美食紙膠帶一捲(市值120元)，1名。',
              4: '多元文化繪本《誰偷吃了我的豌豆烤餅》，1名。',
              5: {
                title: '移民工文學獎作品集，共6名。',
                content: '主題如下，每本抽出1名：',
                list: [
                  '《流》移動的生命力，浪潮中的臺灣',
                  '《航》破浪而來，逆風中的自由',
                  '《光》以靈魂冶煉文字，在暗處發亮',
                  '《渡》在現實與想望中泅泳',
                  '《生》從此生到來生',
                  '《蛻》寧鳴而死，不默而生'
                ]
              },
              6: {
                title: '《鳴個喇吧》團隊出版之緬甸街雜誌，共3名。',
                content: '主題如下，每本抽出1名：',
                list: [
                  '第四刊｜緬甸奶茶',
                  '第五刊｜魚湯麵',
                  '第六刊｜稀豆粉'
                ]
              }
            }
          },
          sec4: {
            title: '四、中獎通知及獲獎方式：',
            content: {
              '1-1': '得獎名單，將公告於《',
              '1-2': '》粉絲專頁，同步以電子郵件通知獲獎人。',
              2: '「緬甸街奶茶兌換卷」：以實體郵件平信寄送（兌換卷指定店家、使用辦法等，將於獲獎電子郵件中述明）。',
              3: '抽獎各項文化好禮：將於4/30活動最後一日抽出，一週內寄送獲獎人。',
              4: '寄送辦法：寄送獎項僅限台灣地區（含離島）。國外地區寄送郵務，由得獎者自行負擔郵寄費用。',
              website: '滾出趣人生實驗所'
            }
          },
          sec5: {
            title: '五、注意事項：',
            content: {
              1: '得獎者若因填寫資料不完整、不正確、無法聯絡，視同得獎者自動放棄得獎資格，恕不另行通知。',
              2: '本活動之獎品以實物為準，不得要求更換顏色、規格、轉讓或折換成現金。獎項經主辦單位寄出後，如有郵務遺失、盜領、自行拋棄、毀損等，恕不補發獎品。',
              3: '主辦單位就本活動參加者之資格，保有審查之權利，參加者若以惡意或其他明顯違反活動公平性之方式，意圖影響活動，主辦單位得立即取消該人參加與中獎資格。若因而造成主辦單位之損失，應負賠償之責任。',
              4: '如有任何因電腦、網路、技術或不可歸責於主辦單位之事由，而使參加者所上傳登錄之資料有遲延、遺失、錯誤、無法辨識或毀損之情況時，主辦單位不負任何法律責任，參加者與中獎者亦不得異議。',
              5: '活動辦法載明在本活動平台中，主辦單位保有隨時更改活動細節（參加方式及贈獎內容、數量等）之權利，參加者同意完全依照及遵守本活動之更動決定，絕無異議。活動辦法如有更動，將以活動辦法公告為準，不另行通知。',
              6: '本活動因不可抗力之特殊原因無法執行時，主辦單位有權決定取消、終止、修改或暫停。參加活動之民眾視同承認本規定之效力，如有未盡事宜，主辦單位保留修改、終止、變更活動內容細節之權利，且不另行通知。'
            }
          }
        },
        confirmButton: '我了解哩'
      }
    },
    form: {
      login: {
        title: '登入',
        email: '電子信箱',
        password: '密碼',
        button: '登入',
        facebookButton: '用FACEBOOK登入'
      },
      register: {
        title: '註冊',
        email: '電子信箱',
        password: '密碼',
        checkpassword: '確認密碼',
        button: '註冊'
      }
    }
  },
  admin: {
    logoutButton: '登出',
    manage: {
      title: '管理我的母語歌故事',
      returnButton: '回到地圖',
      uploadButton: '上傳一個母語歌故事',
      sound: {
        uploaded: '上傳',
        lang: '歌曲語言',
        location: '故事地點',
        share: '分享',
        edit: '編輯',
        delete: '刪除'
      }
    },
    form: {
      title: {
        create: '上傳母語歌故事',
        edit: '編輯母語歌故事'
      },
      returnButton: '回上一頁',
      tooltips: {
        title: '上傳小撇步',
        sec1: {
          title: '步驟一：尋找母語歌',
          content: {
            1: '父母或祖父母常唱的歌',
            2: '你認同為自己母語的歌',
            3: '家鄉/故鄉的歌',
            4: '對自己生命有意義的歌曲'
          }
        },
        sec2: {
          title: '步驟二：錄製母語歌，也錄下故事',
          content: {
            1: {
              title: '可以怎麼唱？',
              content: '個人獨唱、二重唱、多人合唱 / 清唱、伴唱、樂器彈奏 / 只唱一兩句、一段副歌、一整首歌。（請勿直接錄網路上歌曲表演影片的聲音）'
            },
            2: {
              title: '可以怎麼錄？',
              content: '使用手機、錄音筆、電腦等日常器材皆可。'
            },
            3: {
              title: '要錄什麼故事？',
              content: '讓聽眾更了解這首歌的故事，例如這首歌的時代背景、聽到這首歌會讓你想起什麼人事物。'
            },
            4: {
              title: '可以錄多久？',
              content: '建議5分鐘以內，檔案大小10MB。'
            }
          }
        },
        sec3: {
          title: '步驟三：上傳分享母語歌',
          content: {
            1: {
              title: '這些母語歌會做什麼用',
              content: [
                '我們將共創新北母語聲音地圖，在網站上分享新北的多元文化與多元聲音；也會從中擷取內容，於4/18新北市板橋區四維公園策劃一日展覽。歡迎關注「',
                '2021新北市多元文化節',
                '」。'
              ]
            },
            2: {
              title: '可以錄很多首歌嗎？',
              content: '當然可以！同一個帳號可以上傳多首母語歌。前88名上傳者即獲得奶茶券乙張，還有多項好禮等你來抽！'
            }
          }
        },
        rulesInfoButton: '抽獎辦法請點我'
      },
      fields: {
        provider: {
          nickname: {
            title: '上傳者名稱',
            placeholder: '你想顯示在地圖上的名字'
          },
          name: {
            title: '真實姓名',
            placeholder: '抽獎聯繫使用、不公開'
          },
          phone: {
            title: '電話',
            placeholder: '抽獎聯繫使用'
          },
          email: {
            title: '電子信箱',
            placeholder: '抽獎聯繫使用'
          },
          address: {
            title: '贈獎寄送地址（選填，未填寫視同放棄獲獎資格）',
            placeholder: ''
          },
          age: {
            title: '年齡',
            list: {
              '19-': '19歲以下',
              '20~29': '20~29歲',
              '30~39': '30~39歲',
              '40~49': '40~49歲',
              '50~59': '50~59歲',
              '60~69': '60~69歲',
              '70+': '70歲以上'
            }
          },
          location: {
            title: '您所在的位置',
            placeholder: '在地圖上標出您常出沒的位置',
            dialog: {
              title: '選擇您常出沒的位置',
              cancelButton: '取消',
              confirmButton: '確定'
            }
          },
          website: '個人網站',
          agreeText: [
            '我已經閱讀並同意',
            '「活動個資與授權條款」'
          ]
        },
        sound: {
          file: {
            title: '聲音檔案（檔案大小: 10MB內，檔案格式: mp3、m4a、WAV）',
            placeholder: '點我上傳音樂檔案'
          },
          name: '歌曲名稱/歌曲原唱（不知道歌名者，可以填寫「不確定歌名」）',
          langs: {
            title: '歌曲語言',
            list: {
              chinese: '華語',
              taiwanese: '台語',
              hakka: '客語',
              amis: '阿美族語',
              myanmar: '緬甸語',
              others: '其他'
            }
          },
          area: {
            title: '歌曲故事地（該歌曲的相關故事是發生在什麼地方？）',
            types: areaTypes,
            list: areaList
          },
          moods: {
            title: '歌曲情緒',
            list: {
              miss: '思念',
              happy: '開心',
              sad: '傷感',
              grievance: '不平',
              hope: '希望'
            }
          },
          storyTitle: {
            title: '母語歌故事標題',
            placeholder: '可以以「關於誰、在什麼地方、發生什麼事」命題'
          },
          storyContent: {
            title: '母語歌故事（限200字）',
            placeholder: '這首母語歌，會讓你想起了誰，他是怎麼樣的人呢？歌詞內容談了什麼，讓你想起了什麼事？上次聽到這首母語歌時，是在什麼情境下呢？'
          },
          lyrics: '母語歌歌詞（建議填寫原文及華語翻譯）'
        }
      },
      confirmUploadButton: '確定送出',
      confirmEditButton: '送出修改'
    },
    footer: {
      copyright: 'Copyright 2021 新北市政府文化局'
    }
  },
  dataTransform: {
    moods: {
      miss: '思念',
      happy: '開心',
      sad: '傷感',
      grievance: '不平',
      hope: '希望'
    },
    langs: {
      chinese: '華語',
      taiwanese: '台語',
      hakka: '客語',
      amis: '阿美族語',
      myanmar: '緬甸語',
      others: '其他'
    },
    ages: {
      '19-': '19歲以下',
      '20~29': '20~29歲',
      '30~39': '30~39歲',
      '40~49': '40~49歲',
      '50~59': '50~59歲',
      '60~69': '60~69歲',
      '70+': '70歲以上'
    },
    areas: {
      types: areaTypes,
      list: areaList
    }
  },
  errors: {
    fieldRequired: '這個欄位要填寫唷！',
    emailFormatInvalid: 'Email地址格式錯誤囉！',
    phoneFormatInvalid: '手機號碼格式錯誤囉！',
    fileRequired: '檔案要記得上傳唷！',
    fileExceed10MB: '音檔大小最大只能上傳10MB喔~',
    textExceed200: '最多只能夠打200個字喔！',
    locationRequired: '要選擇你常出現的位置唷！',
    passwordMismatch: '2次輸入的密碼不一樣喔'
  }
}
