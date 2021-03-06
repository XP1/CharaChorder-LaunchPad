const _actionMap =
    
   [
    'NUL', //0x00 0
    'CCFunc', //0x01 1
    'STX', //0x02 2
    'ETX', //0x03 3
    'EOT', //0x04 4
    'ENQ', //0x05 5
    'ACK', //0x06 6
    'BEL', //0x07 7
    'BAC', //0x08 8
    'Tab', //0x09 9
    'ENT', //0x0A 10
    'VT', //0x0B 11
    'FF', //0x0C 12
    'CR', //0x0D 13
    'SOH', //0x0E 14
    'SI', //0x0F 15
    'DLE', //0x10 16
    'DC1', //0x11 17
    'DC2', //0x12 18
    'DC3', //0x13 19
    'DC4', //0x14 20
    'NAK', //0x15 21
    'SYN', //0x16 22
    'ETB', //0x17 23
    'CAN', //0x18 24
    'EM', //0x19 25
    'SUB', //0x1A 26
    'ESC', //0x1B 27
    'FS', //0x1C 28
    'GS', //0x1D 29
    'RS', //0x1E 30
    'US', //0x1F 31
    'SPA', //0x20 32
    '!', //0x21 33
    '"', //0x22 34
    '#', //0x23 35
    '$', //0x24 36
    '%', //0x25 37
    '&', //0x26 38
    '\'', //0x27 39
    '(', //0x28 40
    ')', //0x29 41
    '*', //0x2A 42
    '+', //0x2B 43
    ',', //0x2C 44
    '-', //0x2D 45
    '.', //0x2E 46
    '/', //0x2F 47
    '0', //0x30 48
    '1', //0x31 49
    '2', //0x32 50
    '3', //0x33 51
    '4', //0x34 52
    '5', //0x35 53
    '6', //0x36 54
    '7', //0x37 55
    '8', //0x38 56
    '9', //0x39 57
    ':', //0x3A 58
    ';', //0x3B 59
    '<', //0x3C 60
    '=', //0x3D 61
    '>', //0x3E 62
    '?', //0x3F 63
    '@', //0x40 64
    'A', //0x41 65
    'B', //0x42 66
    'C', //0x43 67
    'D', //0x44 68
    'E', //0x45 69
    'F', //0x46 70
    'G', //0x47 71
    'H', //0x48 72
    'I', //0x49 73
    'J', //0x4A 74
    'K', //0x4B 75
    'L', //0x4C 76
    'M', //0x4D 77
    'N', //0x4E 78
    'O', //0x4F 79
    'P', //0x50 80
    'Q', //0x51 81
    'R', //0x52 82
    'S', //0x53 83
    'T', //0x54 84
    'U', //0x55 85
    'V', //0x56 86
    'W', //0x57 87
    'X', //0x58 88
    'Y', //0x59 89
    'Z', //0x5A 90
    '[', //0x5B 91
    '\\', //0x5C 92
    ']', //0x5D 93
    '^', //0x5E 94
    '_', //0x5F 95
    '`', //0x60 96
    'a', //0x61 97
    'b', //0x62 98
    'c', //0x63 99
    'd', //0x64 100
    'e', //0x65 101
    'f', //0x66 102
    'g', //0x67 103
    'h', //0x68 104
    'i', //0x69 105
    'j', //0x6A 106
    'k', //0x6B 107
    'l', //0x6C 108
    'm', //0x6D 109
    'n', //0x6E 110
    'o', //0x6F 111
    'p', //0x70 112
    'q', //0x71 113
    'r', //0x72 114
    's', //0x73 115
    't', //0x74 116
    'u', //0x75 117
    'v', //0x76 118
    'w', //0x77 119
    'x', //0x78 120
    'y', //0x79 121
    'z', //0x7A 122
    '{', //0x7B 123
    '|', //0x7C 124
    '}', //0x7D 125
    '~', //0x7E 126
    'DEL', //0x7F 127
    '??', //0x80 128
    '??', //0x81 129
    '??', //0x82 130
    '??', //0x83 131
    '??', //0x84 132
    '??', //0x85 133
    '??', //0x86 134
    '??', //0x87 135
    '??', //0x88 136
    '??', //0x89 137
    '??', //0x8A 138
    '??', //0x8B 139
    '??', //0x8C 140
    '??', //0x8D 141
    '??', //0x8E 142
    '??', //0x8F 143
    '??', //0x90 144
    '??', //0x91 145
    '??', //0x92 146
    '??', //0x93 147
    '??', //0x94 148
    '??', //0x95 149
    '??', //0x96 150
    '??', //0x97 151
    '??', //0x98 152
    '??', //0x99 153
    '??', //0x9A 154
    '??', //0x9B 155
    '??', //0x9C 156
    '??', //0x9D 157
    '??', //0x9E 158
    '??', //0x9F 159
    '??', //0xA0 160
    '??', //0xA1 161
    '??', //0xA2 162
    '??', //0xA3 163
    '??', //0xA4 164
    '??', //0xA5 165
    '??', //0xA6 166
    '??', //0xA7 167
    '??', //0xA8 168
    '??', //0xA9 169
    '??', //0xAA 170
    '??', //0xAB 171
    '??', //0xAC 172
    '??', //0xAD 173
    '??', //0xAE 174
    '??', //0xAF 175
    '???', //0xB0 176
    '???', //0xB1 177
    '???', //0xB2 178
    '???', //0xB3 179
    '???', //0xB4 180
    '??', //0xB5 181
    '??', //0xB6 182
    '??', //0xB7 183
    '??', //0xB8 184
    '???', //0xB9 185
    '???', //0xBA 186
    '???', //0xBB 187
    '???', //0xBC 188
    '??', //0xBD 189
    '??', //0xBE 190
    '???', //0xBF 191
    '???', //0xC0 192
    '???', //0xC1 193
    '???', //0xC2 194
    '???', //0xC3 195
    '???', //0xC4 196
    '???', //0xC5 197
    '??', //0xC6 198
    '??', //0xC7 199
    '???', //0xC8 200
    '???', //0xC9 201
    '???', //0xCA 202
    '???', //0xCB 203
    '???', //0xCC 204
    '???', //0xCD 205
    '???', //0xCE 206
    '??', //0xCF 207
    '??', //0xD0 208
    '??', //0xD1 209
    '??', //0xD2 210
    '??', //0xD3 211
    '??', //0xD4 212
    '??', //0xD5 213
    '??', //0xD6 214
    '??', //0xD7 215
    '??', //0xD8 216
    '???', //0xD9 217
    '???', //0xDA 218
    '???', //0xDB 219
    '???', //0xDC 220
    '??', //0xDD 221
    '??', //0xDE 222
    '???', //0xDF 223
    '??', //0xE0 224
    '??', //0xE1 225
    '??', //0xE2 226
    '??', //0xE3 227
    '??', //0xE4 228
    '??', //0xE5 229
    '??', //0xE6 230
    '??', //0xE7 231
    '??', //0xE8 232
    '??', //0xE9 233
    '??', //0xEA 234
    '??', //0xEB 235
    '??', //0xEC 236
    '??', //0xED 237
    '??', //0xEE 238
    '??', //0xEF 239
    '???', //0xF0 240
    '??', //0xF1 241
    '???', //0xF2 242
    '??', //0xF3 243
    '??', //0xF4 244
    '??', //0xF5 245
    '??', //0xF6 246
    '??', //0xF7 247
    '??', //0xF8 248
    '??', //0xF9 249
    '??', //0xFA 250
    '??', //0xFB 251
    '??', //0xFC 252
    '??', //0xFD 253
    '???', //0xFE 254
    'NBSP', //0xFF 255
    'Reset', //0x0100 256
    'Delay0001ms', //0x0101 257
    'Delay0010ms', //0x0102 258
    'Delay0100ms', //0x0103 259
    'Delay1000ms', //0x0104 260
    '0x0105', //0x0105 261
    '0x0106', //0x0106 262
    '0x0107', //0x0107 263
    '0x0108', //0x0108 264
    '0x0109', //0x0109 265
    '0x010A', //0x010A 266
    '0x010B', //0x010B 267
    '0x010C', //0x010C 268
    '0x010D', //0x010D 269
    '0x010E', //0x010E 270
    'Impulse', //0x010F 271
    'LAT', //0x0110 272
    'RAT', //0x0111 273
    'LNS', //0x0112 274
    'RNS', //0x0113 275
    'SpurToggle', //0x0114 276
    'Dup', //0x0115 277
    'ImpulseToggle', //0x0116 278
    'GTM', //0x0117 279
    '0x0118', //0x0118 280
    '0x0119', //0x0119 281
    '0x011A', //0x011A 282
    '0x011B', //0x011B 283
    '0x011C', //0x011C 284
    '0x011D', //0x011D 285
    '0x011E', //0x011E 286
    '0x011F', //0x011F 287
    '0x0120', //0x0120 288
    '0x0121', //0x0121 289
    '0x0122', //0x0122 290
    '0x0123', //0x0123 291
    '0x0124', //0x0124 292
    '0x0125', //0x0125 293
    '0x0126', //0x0126 294
    '0x0127', //0x0127 295
    '0x0128', //0x0128 296
    '0x0129', //0x0129 297
    '0x012A', //0x012A 298
    '0x012B', //0x012B 299
    '0x012C', //0x012C 300
    '0x012D', //0x012D 301
    '0x012E', //0x012E 302
    '0x012F', //0x012F 303
    '0x0130', //0x0130 304
    '0x0131', //0x0131 305
    '0x0132', //0x0132 306
    '0x0133', //0x0133 307
    '0x0134', //0x0134 308
    '0x0135', //0x0135 309
    '0x0136', //0x0136 310
    '0x0137', //0x0137 311
    '0x0138', //0x0138 312
    '0x0139', //0x0139 313
    '0x013A', //0x013A 314
    '0x013B', //0x013B 315
    '0x013C', //0x013C 316
    'MLB', //0x013D 317
    'RMC', //0x013E 318
    'MMB', //0x013F 319
    'MouseLeftBtnToggle', //0x0140 320
    'MouseRightBtnToggle', //0x0141 321
    'MouseMiddleBtnToggle', //0x0142 322
    'MouseLeftBtnPress', //0x0143 323
    'MouseRightBtnPress', //0x0144 324
    'MouseMiddleBtnPress', //0x0145 325
    'MouseLeftBtnRelease', //0x0146 326
    'MouseRightBtnRelease', //0x0147 327
    'MouseMiddleBtnRelease', //0x0148 328
    'M???', //0x0149 329
    'M???', //0x014A 330
    'M???', //0x014B 331
    'M???', //0x014C 332
    'MSD', //0x014D 333
    'MouseScrollCoastRight', //0x014E 334
    'MSU', //0x014F 335
    'MouseScrollCoastLeft', //0x0150 336
    'LeftDoubleClick', //0x0151 337
    'RightDoubleClick', //0x0152 338
    'TripleClick', //0x0153 339
    '0x0154', //0x0154 340
    '0x0155', //0x0155 341
    '0x0156', //0x0156 342
    '0x0157', //0x0157 343
    '0x0158', //0x0158 344
    '0x0159', //0x0159 345
    '0x015A', //0x015A 346
    '0x015B', //0x015B 347
    '0x015C', //0x015C 348
    '0x015D', //0x015D 349
    '0x015E', //0x015E 350
    '0x015F', //0x015F 351
    '0x0160', //0x0160 352
    '0x0161', //0x0161 353
    '0x0162', //0x0162 354
    '0x0163', //0x0163 355
    '0x0164', //0x0164 356
    '0x0165', //0x0165 357
    'PwrStat', //0x0166 358
    '0x0167', //0x0167 359
    '0x0168', //0x0168 360
    '0x0169', //0x0169 361
    '0x016A', //0x016A 362
    '0x016B', //0x016B 363
    '0x016C', //0x016C 364
    '0x016D', //0x016D 365
    '0x016E', //0x016E 366
    '0x016F', //0x016F 367
    '0x0170', //0x0170 368
    '0x0171', //0x0171 369
    '0x0172', //0x0172 370
    '0x0173', //0x0173 371
    '0x0174', //0x0174 372
    '0x0175', //0x0175 373
    '0x0176', //0x0176 374
    '0x0177', //0x0177 375
    '0x0178', //0x0178 376
    '0x0179', //0x0179 377
    '0x017A', //0x017A 378
    '0x017B', //0x017B 379
    '0x017C', //0x017C 380
    '0x017D', //0x017D 381
    '0x017E', //0x017E 382
    'ReleaseMods', //0x017F 383
    'LCK', //0x0180 384
    'LSK', //0x0181 385
    'LAK', //0x0182 386
    'LGK', //0x0183 387
    'RCK', //0x0184 388
    'RSK', //0x0185 389
    'RAK', //0x0186 390
    'RGK', //0x0187 391
    'CAP', //0x0188 392
    'F1', //0x0189 393
    'F2', //0x018A 394
    'F3', //0x018B 395
    'F4', //0x018C 396
    'F5', //0x018D 397
    'F6', //0x018E 398
    'F7', //0x018F 399
    'F8', //0x0190 400
    'F9', //0x0191 401
    'F10', //0x0192 402
    'F11', //0x0193 403
    'F12', //0x0194 404
    'PrintScreen', //0x0195 405
    'ScrollLock', //0x0196 406
    'Pause', //0x0197 407
    'Insert', //0x0198 408
    'Home', //0x0199 409
    'PageUp', //0x019A 410
    'DeleteForward', //0x019B 411
    'End', //0x019C 412
    'PageDown', //0x019D 413
    '???', //0x019E 414
    '???', //0x019F 415
    '???', //0x01A0 416
    '???', //0x01A1 417
    'NumLock', //0x01A2 418
    'F13', //0x01A3 419
    'F14', //0x01A4 420
    'F15', //0x01A5 421
    'F16', //0x01A6 422
    'F17', //0x01A7 423
    'F18', //0x01A8 424
    'F19', //0x01A9 425
    'F20', //0x01AA 426
    'F21', //0x01AB 427
    'F22', //0x01AC 428
    'F23', //0x01AD 429
    'F24', //0x01AE 430
    'Execute', //0x01AF 431
    'Help', //0x01B0 432
    'Menu', //0x01B1 433
    'Select', //0x01B2 434
    'Stop', //0x01B3 435
    'Again', //0x01B4 436
    'Undo', //0x01B5 437
    'Cut', //0x01B6 438
    'Copy', //0x01B7 439
    'Paste', //0x01B8 440
    'Find', //0x01B9 441
    'Mute', //0x01BA 442
    'VolUp', //0x01BB 443
    'VolDn', //0x01BC 444
    'Intl1', //0x01BD 445
    'Intl2', //0x01BE 446
    'Intl3', //0x01BF 447
    'Intl4', //0x01C0 448
    'Intl5', //0x01C1 449
    'Intl6', //0x01C2 450
    'Intl7', //0x01C3 451
    'Intl8', //0x01C4 452
    'Intl9', //0x01C5 453
    'LANG1', //0x01C6 454
    'LANG2', //0x01C7 455
    'LANG3', //0x01C8 456
    'LANG4', //0x01C9 457
    'LANG5', //0x01CA 458
    'LANG6', //0x01CB 459
    'LANG7', //0x01CC 460
    'LANG8', //0x01CD 461
    'LANG9', //0x01CE 462
    'AtlErase', //0x01CF 463
    'SysReq', //0x01D0 464
    'Cancel', //0x01D1 465
    'Clear', //0x01D2 466
    'Prior', //0x01D3 467
    'Return', //0x01D4 468
    'Separator', //0x01D5 469
    'Out', //0x01D6 470
    'Oper', //0x01D7 471
    'Clear/Again', //0x01D8 472
    'CrSel/Props', //0x01D9 473
    'ExSel', //0x01DA 474
    'ThouSep', //0x01DB 475
    'DeciSep', //0x01DC 476
    'CurrencyUnit', //0x01DD 477
    'CurrencySubUnit', //0x01DE 478
    'KPMStore', //0x01DF 479
    'KPMRecall', //0x01E0 480
    'KPMClear', //0x01E1 481
    'KPMAdd', //0x01E2 482
    'KPMSub', //0x01E3 483
    'KPMMult', //0x01E4 484
    'KPMDiv', //0x01E5 485
    'KP+/-', //0x01E6 486
    'KPClear', //0x01E7 487
    'KPClearEntry', //0x01E8 488
    'KPBin', //0x01E9 489
    'KPOct', //0x01EA 490
    'KPDec', //0x01EB 491
    'KPHex', //0x01EC 492
    'KMPlayPause', //0x01ED 493
    'KMStopCD', //0x01EE 494
    'KMPrevSong', //0x01EF 495
    'KMNextSong', //0x01F0 496
    'KMEjectCD', //0x01F1 497
    'KMVolUp', //0x01F2 498
    'KMVolDn', //0x01F3 499
    'KMMute', //0x01F4 500
    'KMwww', //0x01F5 501
    'KMBack', //0x01F6 502
    'KMForward', //0x01F7 503
    'KMStop', //0x01F8 504
    'KMFind', //0x01F9 505
    'KMScrollUp', //0x01FA 506
    'KMScrollDn', //0x01FB 507
    'KMEdit', //0x01FC 508
    'KMSleep', //0x01FD 509
    'KMCoffee', //0x01FE 510
    'KMRefresh', //0x01FF 511
    'CC_Physical', //0x0200 512
    'RH_Thumb_3_Left', //0x0201 513
    'RH_Thumb_3_Down', //0x0202 514
    'RH_Thumb_3_Right', //0x0203 515
    'RH_Thumb_3_Up', //0x0204 516
    'RH_Thumb_3_Center', //0x0205 517
    'RH_Thumb_2_Left', //0x0206 518
    'RH_Thumb_2_Down', //0x0207 519
    'RH_Thumb_2_Right', //0x0208 520
    'RH_Thumb_2_Up', //0x0209 521
    'RH_Thumb_2_Center', //0x0210 522
    'RH_Thumb_1_Left', //0x0211 523
    'RH_Thumb_1_Down', //0x0212 524
    'RH_Thumb_1_Right', //0x0213 525
    'RH_Thumb_1_Up', //0x0214 526
    'RH_Thumb_1_Center', //0x0215 527
    'RH_Pinky_Left', //0x0216 528
    'RH_Pinky_Down', //0x0217 529
    'RH_Pinky_Right', //0x0218 530
    'RH_Pinky_Up', //0x0219 531
    'RH_Pinky_Center', //0x0220 532
    'RH_Ring_Secondary_Left', //0x0221 533
    'RH_Ring_Secondary_Down', //0x0222 534
    'RH_Ring_Secondary_Right', //0x0223 535
    'RH_Ring_Secondary_Up', //0x0224 536
    'RH_Ring_Secondary_Center', //0x0225 537
    'RH_Ring_Primary_Left', //0x0226 538
    'RH_Ring_Primary_Down', //0x0227 539
    'RH_Ring_Primary_Right', //0x0228 540
    'RH_Ring_Primary_Up', //0x0229 541
    'RH_Ring_Primary_Center', //0x0230 542
    'RH_Middle_Secondary_Left', //0x0231 543
    'RH_Middle_Secondary_Down', //0x0232 544
    'RH_Middle_Secondary_Right', //0x0233 545
    'RH_Middle_Secondary_Up', //0x0234 546
    'RH_Middle_Secondary_Center', //0x0235 547
    'RH_Middle_Primary_Left', //0x0236 548
    'RH_Middle_Primary_Down', //0x0237 549
    'RH_Middle_Primary_Right', //0x0238 550
    'RH_Middle_Primary_Up', //0x0239 551
    'RH_Middle_Primary_Center', //0x0240 552
    'RH_Index_Left', //0x0241 553
    'RH_Index_Down', //0x0242 554
    'RH_Index_Right', //0x0243 555
    'RH_Index_Up', //0x0244 556
    'RH_Index_Center', //0x0245 557
    'LH_Thumb_3_Left', //0x0246 558
    'LH_Thumb_3_Down', //0x0247 559
    'LH_Thumb_3_Right', //0x0248 560
    'LH_Thumb_3_Up', //0x0249 561
    'LH_Thumb_3_Center', //0x0250 562
    'LH_Thumb_2_Left', //0x0251 563
    'LH_Thumb_2_Down', //0x0252 564
    'LH_Thumb_2_Right', //0x0253 565
    'LH_Thumb_2_Up', //0x0254 566
    'LH_Thumb_2_Center', //0x0255 567
    'LH_Thumb_1_Left', //0x0256 568
    'LH_Thumb_1_Down', //0x0257 569
    'LH_Thumb_1_Right', //0x0258 570
    'LH_Thumb_1_Up', //0x0259 571
    'LH_Thumb_1_Center', //0x0260 572
    'LH_Pinky_Left', //0x0261 573
    'LH_Pinky_Down', //0x0262 574
    'LH_Pinky_Right', //0x0263 575
    'LH_Pinky_Up', //0x0264 576
    'LH_Pinky_Center', //0x0265 577
    'LH_Ring_Secondary_Left', //0x0266 578
    'LH_Ring_Secondary_Down', //0x0267 579
    'LH_Ring_Secondary_Right', //0x0268 580
    'LH_Ring_Secondary_Up', //0x0269 581
    'LH_Ring_Secondary_Center', //0x0270 582
    'LH_Ring_Primary_Left', //0x0271 583
    'LH_Ring_Primary_Down', //0x0272 584
    'LH_Ring_Primary_Right', //0x0273 585
    'LH_Ring_Primary_Up', //0x0274 586
    'LH_Ring_Primary_Center', //0x0275 587
    'LH_Middle_Secondary_Left', //0x0276 588
    'LH_Middle_Secondary_Down', //0x0277 589
    'LH_Middle_Secondary_Right', //0x0278 590
    'LH_Middle_Secondary_Up', //0x0279 591
    'LH_Middle_Secondary_Center', //0x0280 592
    'LH_Middle_Primary_Left', //0x0281 593
    'LH_Middle_Primary_Down', //0x0282 594
    'LH_Middle_Primary_Right', //0x0283 595
    'LH_Middle_Primary_Up', //0x0284 596
    'LH_Middle_Primary_Center', //0x0285 597
    'LH_Index_Left', //0x0286 598
    'LH_Index_Down', //0x0287 599
    'LH_Index_Right', //0x0288 600
    'LH_Index_Up', //0x0289 601
    'LH_Index_Center' //0x0290 602
];

const  CHARACHORDER = [
    0x0000, // 0, 
    0x013E, // 1, mouse right button press-and-release
    ('!').charCodeAt(0), // 2, !
    0x0187, // 3, right gui
    0x003F, // 4, ?
    0x0000, // 5, 
    ('b').charCodeAt(0), // 6, b
    ('q').charCodeAt(0), // 7, q
    0x0115, // 8, previous phrase
    ('x').charCodeAt(0), // 9, x
    0x0000, //10, 
    ('f').charCodeAt(0), //11, f
    ('d').charCodeAt(0), //12, d
    ('h').charCodeAt(0), //13, h
    ('p').charCodeAt(0), //14, p
    0x0000, //15, //'fed' is using this
    0x0111, //16, ambi throw right
    0x0113, //17, num-shift right
    0x0186, //18, alt right
    0x0185, //19, shift right
    0x0000, //20, 
    0x0149, //21, mouse left hand down
    0x014A, //22, mouse left hand right
    0x014B, //23, mouse left hand up
    0x014C, //24, mouse left hand left
    0x0000, //25, 
    ('s').charCodeAt(0), //26, s
    (';').charCodeAt(0), //27, ;
    0x0184, //28, ctrl right
    ('y').charCodeAt(0), //29, y
    0x0000, //30, 
    0x01A0, //31, arrow down
    0x019E, //32, arrow right
    0x01A1, //33, arrow up
    0x019F, //34, arrow left
    0x0000, //35, 
    ('n').charCodeAt(0), //36, n
    ('j').charCodeAt(0), //37, j
    0x0009, //38, tab horizontal
    ('l').charCodeAt(0), //39, l
    0x0000, //40, 
    ('t').charCodeAt(0), //41, t
    (' ').charCodeAt(0), //42,  (space)
    0x000A, //43, enter (line feed)
    ('a').charCodeAt(0), //44, a
    0x0000, //45, 
    ('/').charCodeAt(0), //46, /
    ('-').charCodeAt(0), //47, -
    0x0183, //48, left gui
    0x001B, //49, escape
    0x0000, //50, 
    ('w').charCodeAt(0), //51, w
    0x013D, //52, mouse left button press-and-release
    ('g').charCodeAt(0), //53, g
    ('z').charCodeAt(0), //54, z
    0x0151, //55, double click
    ('k').charCodeAt(0), //56, k
    ('v').charCodeAt(0), //57, v
    ('m').charCodeAt(0), //58, m
    ('c').charCodeAt(0), //59, c
    0x0000, //60, 
    0x0110, //61, ambi throw left
    0x0181, //62, shift left
    0x0182, //63, alt left
    0x0110, //64, num-shift left
    0x0000, //65, 
    0x0149, //66, mouse right hand down
    0x014A, //67, mouse right hand right
    0x014B, //68, mouse right hand up
    0x014C, //69, mouse right hand left
    0x0000, //70, 
    ('u').charCodeAt(0), //71, u
    ('\\').charCodeAt(0), //72, \
    0x0180, //73, left ctrl
    (',').charCodeAt(0), //74, ,
    0x0000, //75, 
    0x01A0, //76, arrow down
    0x019E, //77, arrow right
    0x01A1, //78, arrow up
    0x019F, //79, arrow left
    0x0000, //80, 
    ('o').charCodeAt(0), //81, o
    ('i').charCodeAt(0), //82, i
    0x007F, //83, del forward
    ('.').charCodeAt(0), //84, .
    0x0000, //85, 
    ('e').charCodeAt(0), //86, e
    ('r').charCodeAt(0), //87, r
    0x0008, //88, backspace
    (' ').charCodeAt(0)  //89,  (space)
  ];
  
  const CHARACHORDERLITE = [
    'GTM', //0
    'LCtrl', //1
    'LAlt', //2
    'LSpace', //3
    'Function', //4
    'Dup', //5
    'RSpace', //6
    'Dup', //7
    'Win', //8
    'Left', //9
    'Down', //10
    'Right', //11
    'LShift', //12
    'z', //13
    'x', //14
    'c', //15
    'v', //16
    'b', //17
    'n', //18
    'm', //19
    ',', //20
    '.', //21
    '/', //22
    'RShift', //23
    'Up', //24
    'Del', //25
    'Spur', //26
    'a', //27
    's', //28
    'd', //29
    'f', //30
    'g', //31
    'h', //32
    'j', //33
    'k', //34
    'l', //35
    ';', //36
    '\'', //37
    'Tab', //38
    'q', //39
    'w', //40
    'e', //41
    'r', //42
    't', //43
    'y', //44
    'u', //45
    'i', //46
    'o', //47
    'p', //48
    '[', //49
    '\\', //50
    '1', //51
    '2', //52
    '3', //53
    '4', //54
    '5', //55
    '6', //56
    '7', //57
    '8', //58
    '9', //59
    '0', //60
    '-', //61
    '=', //62
    'Back'  //63
  ];
  
  
  //this shouldn't be used anymore
  let _keyMap = [
  'GTM', //0
  'LCtrl', //1
  'LAlt', //2
  'LSpace', //3
  'Present', //4
  'Dup', //5 Plural
  'RSpace', //6
  'Dup', //7
  'Win', //8
  'Left', //9
  'Down', //10
  'Right', //11
  'LShift', //12
  'z', //13
  'x', //14
  'c', //15
  'v', //16
  'b', //17
  'n', //18
  'm', //19
  ',', //20
  '.', //21
  '/', //22
  'RShift', //23
  'Up', //24
  'Del', //25
  'Spur', //26
  'a', //27
  's', //28
  'd', //29
  'f', //30
  'g', //31
  'h', //32
  'j', //33 
  'k', //34
  'l', //35
  ';', //36
  '\'', //37
  'Tab', //38
  'q', //39
  'w', //40
  'e', //41
  'r', //42
  't', //43
  'y', //44
  'u', //45
  'i', //46
  'o', //47
  'p', //48
  '[', //49
  '\\', //50
  '1', //51
  '2', //52
  '3', //53
  '4', //54
  '5', //55
  '6', //56
  '7', //57
  '8', //58
  '9', //59
  '0', //60
  '-', //61
  '=', //62
  'Back'  //63
  ];
  _keyMap = _keyMap.reverse();
  const _keyMapDefaults = [
    
    CHARACHORDER,
    CHARACHORDERLITE
  
    ];
    
    const _chordMaps: any[][] = [];


export { _actionMap, _keyMapDefaults, _keyMap, _chordMaps };

  
    
   
