const areaTypes = {
  taiwan: 'Taiwan',
  others: 'Other Countries'
}

const areaList = {
  KLU: 'Keelung City',
  TPE: 'Taipei City',
  TPH: 'New Taipei City',
  TYC: 'Taoyuan City',
  HSC: 'Hsinchu City',
  HSH: 'Hsinchu County',
  MAL: 'Miaoli County',
  TXG: 'Taichung City',
  CWH: 'Changhua County',
  NTO: 'Nantou County',
  YLH: 'Yunlin County',
  CYI: 'Chiayi City',
  CHY: 'Chiayi County',
  TNN: 'Tainan City',
  KHH: 'Kaohsiung City',
  IUH: 'Pingtung County',
  ILN: 'Yilan County',
  HWA: 'Hualien County',
  TTT: 'Taitung County',
  PEH: 'Penghu County',
  KMN: 'Kinmen County',
  LNN: 'Lienchiang County',
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
    eventSiteButton: '2021 Culture Festival in New Taipei City',
    welcome: {
      subtitle: 'Storing the Old-Time Memories of this Generation',
      button: 'Your Mother Tongue Songs!'
    },
    uploadButton: {
      text: ['Upload', 'My Songs'],
      tooltips: ['Upload before 4/30', "Let's win Milk Tea coupon!"]
    },
    filterPanel: {
      title: 'List of Mother-Tongue Songs',
      marquee: 'Hello, We\'ve collected {soundsCount} Mother Tongue songs that total travel distance accumulated {distanceInKM} km.',
      moods: {
        title: 'Mood Themes',
        list: {
          all: 'All',
          miss: 'Missing | Treasured in Hearts',
          happy: 'Happy | Warming Our Hearts',
          sad: 'Sad | the Miserable Past',
          grievance: 'Unjust | Sing for the Mistreated',
          hope: 'Hopeful | for the Future'
        }
      },
      langs: {
        title: 'Song List by Language',
        list: {
          all: 'All',
          chinese: 'Mandarin',
          taiwanese: 'Taiwanese',
          hakka: 'Hakka',
          amis: 'Amis',
          myanmar: 'Burmese',
          others: 'Others'
        }
      },
      areas: {
        title: 'Song List by Region',
        content: 'From Where the Mother Tongue Songs Have Arrived in New Taipei City',
        list: [
          'Taiwan',
          'East Asia',
          'World',
          'All'
        ]
      }
    },
    sound: {
      intro: 'Introduction',
      lyrics: 'Lyrics',
      name: ' Song Name',
      lang: 'Song Language',
      location: 'Story Location',
      story: 'Story of Song'
    },
    footer: {
      organizer: 'Organizer',
      implementer: 'Implementer',
      copyright: 'Copyright © 2021 New Taipei City Culture Festival'
    }
  },
  login: {
    backButton: 'Go Back for more songs',
    dialog: {
      event: {
        activeButton: 'About the Event',
        title: 'About the Event',
        content: {
          desc1: 'When hearing the three words "mother tongue songs," what melodies will ring in your head?',
          'desc2-1': 'Is it the tear and sweat that you have spared with your comrades on your social movement street protests?',
          'desc2-2': 'Is it the tribal elders’ singing of ancestral spirits’ warm reminders?',
          'desc2-3': 'Or is it the elders humming ballads in the afternoon?',
          'desc3-1': '"Search – for those Unforgettable Mother Tongue Songs" is a series of events for the 2021 Culture Festival in New Taipei City.',
          'desc3-2': 'The theme for this year’s Cultural Festival is "music" – hoping that through an online map of mother tongue songs, everyone can altogether collect and exchange each other’s cultures.  You are all invited to share those moments engraved deep in your hearts.  Let’s preserve all the mother tongue songs and stories belonging to this era.',
          sec1: {
            title: 'I. Event Time',
            content: '2021/04/01-2021/4/30'
          },
          sec2: {
            title: 'II. Event Objects',
            content: 'Anyone interested in sharing mother tongue songs and life stories is welcomed.'
          },
          sec3: {
            title: 'III. Subsequent Events',
            content: [
              'Please visit the"',
              '"official website for more details on its series of events!'
            ],
            website: 'Culture Festival in New Taipei City'
          }
        },
        confirmButton: 'I Got It'
      },
      lottery: {
        activeButton: 'Lucky Draw Rules',
        title: 'Upload Stories of Mother Tongue Songs to Win Great Prizes!',
        content: {
          desc: 'To encourage more people to share stories of mother tongue songs, we have prepared Burmese Street Southeast Asian Milk Tea Vouchers, multicultural picture books, literature of migrant workers, and other lucky draw prizes.  Anyone who uploads will have a chance to win these great cultural prizes~',
          sec1: 'I. Event Date: 2021/04/01-2021/4/30',
          sec2: {
            title: 'II. Event Rules:',
            content: 'Upload once will receive one chance for a lucky draw – upload more for more chances to win! During the event period, regardless of account, upload one story of mother tongue song will receive one chance for a lucky draw (upload two mother tongue songs via the same account will receive two chances to win, and so on so forth).  However, each eligible lucky draw is only allowed to win one prize (anyone who uploads repetitive contents will be eliminated for his/her account’s eligibility to participate in the lucky draw.)'
          },
          sec3: {
            title: 'III. Event Prizes and Openings:',
            content: {
              1: 'Burmese Street Milk Tea Vouchers - 77 Persons',
              2: 'One Set of "Burmese Street Gourmet Airline Event" Limited Design Postcard (5 cards) – 1 Person',
              3: 'One Roll of Burmese Street Gourmet Tape Designed and Published by the "Mingalar Par" Team (Worth NT$120) – 1 Person',
              4: 'Multicultural Picture Book Who Stole My Yellow Split Pea Fritter – 1 Person',
              5: {
                title: 'Collection of Migrant Worker Literature Award-Winning Pieces –  6 Persons',
                content: 'Topics are as follows.  Each book will be awarded to 1 person.',
                list: [
                  'Flow – Moving vitality.  Taiwan in the waves.',
                  'Navigate – Break the waves.  Freedom against the wind.',
                  'Light – Polish words through your soul; shine in the dark.',
                  'Cross – Swim in reality and hope.',
                  'Birth – From this life to the next.',
                  'Transform – Rather speak up and die than be silent and live.'
                ]
              },
              6: {
                title: 'Burmese Street Magazine published by "Mingalar Par" Team – 3 Persons',
                content: 'Topics are as follows.  Each book will be awarded to 1 person.',
                list: [
                  'Fourth Issue | Burmese Milk Tea',
                  'Fifth Issue | Fish Noodle Soup ',
                  'Sixth Issue | Creamed Soybean '
                ]
              }
            }
          },
          sec4: {
            title: 'IV. Prize Notification and Winning Method:',
            content: {
              '1-1': 'List of prize recipients will be published on the "',
              '1-2': '" fan page. The recipients will also be simultaneously notified via e-mail and be requested to provide postal address for receiving the prizes.',
              2: 'Lucky Draw for "Burmese Street Milk Tea Voucher": Vouchers will be sent via regular mail in two batches on 4/7 and 4/14 (Voucher partner shops and usage methods will be listed in detail in the prize winner notification email.) ',
              3: 'All kinds of great lucky draw cultural prizes: will be drawn on the last day of the event on 4/30, and the prizes will be sent to the prize recipients within a week.',
              4: 'Delivery Method: Prizes will only be delivered within Taiwan (including offshore islands).   For postal delivery abroad, prize winners will need to pay for the postal expense.',
              website: 'Rolling in Life'
            }
          },
          sec5: {
            title: 'V. Special Notice:',
            content: {
              1: 'In cases when prize recipients did not fill out complete and accurate data or cannot be contacted, they would be treated as automatically giving up their winner eligibility without separate notice.',
              2: 'Please refer to actual objects for the prizes offered by this event.  Exchanges for gifts’ colors and specifications, gift transfers, or exchanged for cash are not allowed.   After the prizes have been sent out by the organizer, in cases the postal packages are lost, stolen, or voluntarily abandoned or damaged, prizes will not be reissued.',
              3: 'The organizer reserves the right of inspection for the eligibility of the event’s participants.  If the participants maliciously or act in other ways that apparently violate the event’s fairness and purposely influence the event, the organizer would immediately invalidate these people’s eligibility for event participation and prize receipts. Anyone who causes any damage to the organizer will be responsible for related consequent expenses.',
              4: 'In cases where reasons related to the computer, internet, technical, or other issues that the organizer is not liable for causing any delay, loss, missing data, or any situation of being unable to identify the data or resulting any damages to the data, the organizer will not take any related legal responsibility, and the participants and the prize winners shall also not raise any objection.',
              5: 'Details of the event rules are published on the event’s platform, and the organizer reserves the right to change any detail of the event (participation method, prizes, counts, etc.).  Participants agree to completely comply with and follow any decisions of revisions, and they shall pose any objection.  In cases there are any changes to the event, they will be in accordance with the event rules announcements, which will not be provided in a separate notice.',
              6: "In cases when special circumstances from a force majeure are causing the event to come to a halt, the organizer would reserve the right to cancel, terminate, revise, or temporarily stop the event.   People participating in the event would naturally recognize the effectiveness of its rules.  If there are any unclear matters, the organizer reserves the right to revise, terminate, and change the event's details without prior notice."
            }
          }
        },
        confirmButton: 'I Got it'
      }
    },
    form: {
      login: {
        title: 'Login',
        email: 'E-mail Address',
        password: 'Password',
        button: 'Login',
        facebookButton: 'Facebook Login'
      },
      register: {
        title: 'Register',
        email: 'E-mail Address',
        password: 'Password',
        checkpassword: 'Confirm Password',
        button: 'Register'
      }
    }
  },
  admin: {
    logoutButton: 'Logout',
    manage: {
      title: 'My Story Song Book',
      returnButton: 'Return to Map',
      uploadButton: 'Upload One Story of Mother Tongue Song',
      sound: {
        uploaded: 'Uploaded',
        lang: 'Song Language',
        location: 'Story Location',
        share: 'Share',
        edit: 'Edit',
        delete: 'Delete'
      }
    },
    form: {
      title: {
        create: 'Upload My Song',
        edit: 'Edit My Song'
      },
      returnButton: 'Go Back',
      tooltips: {
        title: 'Upload Tips',
        sec1: {
          title: 'Step 1: Search for Mother Tongue Songs.',
          content: {
            1: 'Songs that your parents and grandparents would often sing',
            2: 'Songs that you recognize as your mother tongue songs',
            3: 'Songs from your hometown / homeland',
            4: 'Songs that are meaningful to your life'
          }
        },
        sec2: {
          title: 'Step 2: Recording Mother Tongue Song and Recording Down the Story.',
          content: {
            1: {
              title: 'How can you sing it?',
              content: 'Solo, duo, chorus / A Capella, vocal accompaniment, musical instrument playing / singing only one or two sentences, singing a section of the chorus, singing the whole song.   (Please do not directly record the sound from any online video clip performing the song.)'
            },
            2: {
              title: 'How can you record it?',
              content: 'You can use a cell phone, recording pen, computer, or any other equipment of daily use.'
            },
            3: {
              title: 'What kind of story should you record?',
              content: 'A story that will allow the audience to better understand the song, e.g. the historical background for the song, or the people, events, or objects that you would think of when listening to this song?'
            },
            4: {
              title: 'How long can you record the song?',
              content: 'It is recommended to record for shorter than 5 minutes, with a file size of 10MB at most.'
            }
          }
        },
        sec3: {
          title: 'Step 3: Upload and Share Mother Tongue Songs.',
          content: {
            1: {
              title: 'What will these mother tongue songs be used for?',
              content: [
                'We will be working together to create the "New Taipei City’s Map of Mother Tongue Sounds," sharing New Taipei City’s multicultural and diverse voices on the internet.  We will also retrieve some of the content to be displayed at the One-Day Exhibition planned to take place at Siwei Park in Banqiao District, New Taipei City on 4/18. Please follow "',
                '2021 Culture Festival in New Taipei City',
                '"'
              ]
            },
            2: {
              title: 'Can I record multiple songs?',
              content: 'Of course! One account can upload multiple mother tongue songs. The first 88 uploaders will receive 1 milk tea voucher – and there are many more great lucky draw prizes waiting for you!'
            }
          }
        },
        rulesInfoButton: 'Learn Lucky Draw Rules'
      },
      fields: {
        provider: {
          nickname: {
            title: 'Nickname of Uploader',
            placeholder: 'Name you want to display on the map.'
          },
          name: {
            title: 'Real Name',
            placeholder: 'Only use for Lucky Draw contact.'
          },
          phone: {
            title: 'Telephone',
            placeholder: 'For sending prize, Taiwan number only.'
          },
          email: {
            title: 'E-mail Address',
            placeholder: 'For Sending Prize.'
          },
          address: {
            title: 'Mail Address  (Optional; omitting the field will be regarded as giving up your prize winning eligibility.)',
            placeholder: 'For Sending Prize.'
          },
          age: {
            title: 'Age',
            list: {
              '19-': 'Below 19 years old',
              '20~29': '20~29 years old',
              '30~39': '30~39 years old',
              '40~49': '40~49 years old',
              '50~59': '50~59 years old',
              '60~69': '60~69 years old',
              '70+': 'Above 70 years old'
            }
          },
          location: {
            title: 'Your Current Location',
            placeholder: 'Mark your frequently visited locations.',
            dialog: {
              title: 'Mark your frequently visited locations.',
              cancelButton: 'Cancel',
              confirmButton: 'OK'
            }
          },
          website: 'Personal Website',
          agreeText: [
            'I have read and agreed to the',
            'Event Personal Data and License Terms.'
          ]
        },
        sound: {
          file: {
            title: 'Audio File (File Size:  Smaller than 10MB; File Format: mp3, m4a, WAV)',
            placeholder: 'Click Here to Upload Music Files'
          },
          name: 'Name of Song / Original Singer for the Song (For unknown song names, please fill out "Unknown").',
          langs: {
            title: 'Song Language',
            placeholder: 'Language of this song.',
            list: {
              chinese: 'Mandarin',
              taiwanese: 'Taiwanese',
              hakka: 'Hakka',
              amis: 'Amis',
              myanmar: 'Burmese',
              others: 'Others'
            }
          },
          area: {
            title: 'Song Location (where did the story related to the song take place?)',
            types: areaTypes,
            list: areaList
          },
          moods: {
            title: 'Song Mood',
            list: {
              miss: 'Missing',
              happy: 'Happy',
              sad: 'Sad',
              grievance: 'Unjust',
              hope: 'Hopeful'
            }
          },
          storyTitle: {
            title: 'Title for Your Story of Mother Tongue Song',
            placeholder: 'Where? About Who? What happened?'
          },
          storyContent: {
            title: 'Story of Mother Tongue Song (limited to 200 words)',
            placeholder: 'Who does this mother tongue song remind you of?  What kind of person is he/she?   What are the lyrics talking about, and what would the lyrics remind you of?  Under what circumstance did you last hear this mother tongue song?'
          },
          lyrics: 'Lyrics (it is recommended to fill out in both original language and translation into Mandarin)'
        }
      },
      confirmUploadButton: 'Confirm and Send',
      confirmEditButton: 'Confirm Edit'
    },
    footer: {
      copyright: 'Copyright © 2021 New Taipei City Culture Festival'
    }
  },
  dataTransform: {
    moods: {
      miss: 'Missing',
      happy: 'Happy',
      sad: 'Sad',
      grievance: 'Unjust',
      hope: 'Hopeful'
    },
    langs: {
      chinese: 'Mandarin',
      taiwanese: 'Taiwanese',
      hakka: 'Hakka',
      amis: 'Amis',
      myanmar: 'Burmese',
      others: 'Others'
    },
    ages: {
      '19-': 'Below 19 years old',
      '20~29': '20~29 years old',
      '30~39': '30~39 years old',
      '40~49': '40~49 years old',
      '50~59': '50~59 years old',
      '60~69': '60~69 years old',
      '70+': 'Above 70 years old'
    },
    areas: {
      types: areaTypes,
      list: areaList
    }
  },
  errors: {
    fieldRequired: 'This field must be filled out!',
    emailFormatInvalid: 'Sorry, wrong format!',
    phoneFormatInvalid: 'Sorry, wrong format!',
    fileRequired: 'Remember to upload your files!',
    fileExceed10MB: 'limited within 10MB!',
    textExceed200: 'maximum 200 words!',
    locationRequired: 'Remember to choose your frequently visited locations!',
    passwordMismatch: 'Password mismatch!'
  }
}
