import {InMemoryDbService} from "angular-in-memory-web-api";
import {Injectable} from "@angular/core";
import {Beat} from "../../domain/beat";

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(): NonNullable<unknown> {
    const genres = [
      {
        label: "Metal",
        subGenres: [
          {label: "Metal", fileName: "metal"},
          {label: "Rock", fileName: "rock-beat"},
          {label: "Rock variation", fileName: "rock-beat-variation"},
          {label: "Half time groove", fileName: "half-time-groove"},
          {label: "Blast beat", fileName: "blast-beat"}
        ]
      },
      {
        label: "Techno",
        subGenres: [
          {label: "4 on the floor", fileName: "techno"},
          {label: "Off-Beat Clap", fileName: "off-beat-techno-clap"},
          {label: "Gabber", fileName: "gabber"}
        ]
      },
      {
        label: "Breakbeat",
        subGenres: [
          {label: "Jersey club", fileName: "jersey-club"},
          {label: "Breakcore", fileName: "breakcore"}
        ]
      },
      {
        label: "Garage",
        subGenres: [
          {label: "2 Step", fileName: "garage"},
          {label: "Drum & Bass", fileName: "drum-n-bass"}
        ]
      },
      {
        label: "Trance",
        subGenres: [
          {label: "Psytrance", fileName: "psytrance"}
        ]
      },
      {
        label: "Indus",
        subGenres: [
          {label: "EBM", fileName: "ebm"}
        ]
      },
      {
        label: "Dub",
        subGenres: [
          {label: "Dub", fileName: "dub"}
        ]
      },
      {
        label: "Dancehall",
        subGenres: [
          {label: "Reggaeton", fileName: "dancehall-reggaeton"},
          {label: "Standard", fileName: "dancehall-standard"},
          {label: "Modern", fileName: "dancehall-modern"}
        ]
      }
    ];

    const metalBeat: Beat = {
      id: "metal",
      bpm: 180,
      tracks: [
        {
          name: "Snare",
          fileName: "metal/snare.mp3",
          steps: "____X_______X___".split('').map(step => step === 'X')
        },
        {
          name: "Hats",
          fileName: "metal/crash.mp3",
          steps: "X___X___X___X___".split('').map(step => step === 'X')
        },
        {
          name: "Kick",
          fileName: "metal/kick.mp3",
          steps: "XXXXXXXXXXXXXXXX".split('').map(step => step === 'X')
        }
      ]
    };

    const technoBeat: Beat = {
      id: "techno",
      bpm: 128,
      tracks: [
        {
          name: "Snare",
          fileName: "techno/snare.wav",
          steps: "____X_______X___".split('').map(step => step === 'X')
        },
        {
          name: "Hats",
          fileName: "techno/hat.wav",
          steps: "X_X_X_X_X_X_X_X_".split('').map(step => step === 'X')
        },
        {
          name: "Kick",
          fileName: "techno/kick.wav",
          steps: "X   X   X   X   ".split('').map(step => step === 'X')
        }
      ]
    };

    const rockBeat: Beat = {
      id: "rock-beat",
      bpm: 145,
      tracks: [
        {
          name: "Snare",
          fileName: "metal/snare.mp3",
          steps: "    X       X   ".split('').map(step => step === 'X')
        },
        {
          name: "Hats",
          fileName: "metal/hat.mp3",
          steps: "X   X   X   X   ".split('').map(step => step === 'X')
        },
        {
          name: "Kick",
          fileName: "metal/kick.mp3",
          steps: "X       X       ".split('').map(step => step === 'X')
        }
      ]
    };

    const rockBeatVariation: Beat = {
      id: "rock-beat-variation",
      bpm: 145,
      tracks: [
        {
          name: "Snare",
          fileName: "metal/snare.mp3",
          steps: "    X       X   ".split('').map(step => step === 'X')
        },
        {
          name: "Crash",
          fileName: "metal/crash.mp3",
          steps: "X   X   X   X   ".split('').map(step => step === 'X')
        },
        {
          name: "Kick",
          fileName: "metal/kick.mp3",
          steps: "X       X       ".split('').map(step => step === 'X')
        }
      ]
    };

    const psytranceBeat: Beat = {
      id: "psytrance",
      bpm: 135,
      tracks: [
        {
          name: "Closed hats",
          fileName: "psytrance/closed-hat.wav",
          steps: "X   X   X   X   ".split('').map(step => step === 'X')
        },
        {
          name: "Open hats",
          fileName: "psytrance/open-hat.wav",
          steps: "  X   X   X   X ".split('').map(step => step === 'X')
        },
        {
          name: "Snare",
          fileName: "psytrance/snare.wav",
          steps: "    X       X   ".split('').map(step => step === 'X')
        },
        {
          name: "Kick",
          fileName: "psytrance/kick.wav",
          steps: "X   X   X   X   ".split('').map(step => step === 'X')
        },
        {
          name: "Bass",
          fileName: "psytrance/bass.wav",
          steps: " XXX XXX XXX XXX".split('').map(step => step === 'X')
        }
      ]
    }

    const offBeatTechnoClap: Beat = {
      id: "off-beat-techno-clap",
      bpm: 128,
      tracks: [
        {
          name: "Clap",
          fileName: "gabber/clap.wav",
          steps: "    X      XX       X      XX   ".split('').map(step => step === 'X')
        },
        {
          name: "Hats",
          fileName: "techno/hat.wav",
          steps: "  X   X   X   X   X   X   X   X ".split('').map(step => step === 'X')
        },
        {
          name: "Kick",
          fileName: "techno/kick.wav",
          steps: "X   X   X   X   X   X   X   X   ".split('').map(step => step === 'X')
        }
      ]
    };

    const jerseyClubBeat: Beat = {
      id: "jersey-club",
      bpm: 140,
      tracks: [
        {
          name: "Bed squeak (low)",
          fileName: "jersey-club/squeak_low.mp3",
          steps: "X       X       ".split('').map(step => step === 'X')
        },
        {
          name: "Bed squeak (high)",
          fileName: "jersey-club/squeak_high.mp3",
          steps: "    X       X   ".split('').map(step => step === 'X')
        },
        {
          name: "Snare",
          fileName: "jersey-club/snare.mp3",
          steps: "X   X   X  X  X ".split('').map(step => step === 'X')
        },
        {
          name: "Kick",
          fileName: "jersey-club/kick.mp3",
          steps: "X   X   X  X  X ".split('').map(step => step === 'X')
        }
      ],
      //source: "https://youtu.be/qJtvgAYAuvs?si=ifBHVgsfUL32E2R0"
    };

    const halfTimeGroove: Beat = {
      id: "half-time-groove",
      bpm: 145,
      tracks: [
        {
          name: "Snare",
          fileName: "metal/snare.mp3",
          steps: "        X       ".split('').map(step => step === 'X')
        },
        {
          name: "Crash",
          fileName: "metal/crash.mp3",
          steps: "X   X   X   X   ".split('').map(step => step === 'X')
        },
        {
          name: "Kick",
          fileName: "metal/kick.mp3",
          steps: "X               ".split('').map(step => step === 'X')
        }
      ]
    };

    const garageTwoStep: Beat = {
      id: "garage",
      bpm: 130,
      tracks: [
        {
          name: "Snare",
          fileName: "techno/snare.wav",
          steps: "    X       X   ".split('').map(step => step === 'X')
        },
        {
          name: "Hats",
          fileName: "techno/hat.wav",
          steps: "  X   X   X   X ".split('').map(step => step === 'X')
        },
        {
          name: "Kick",
          fileName: "techno/kick.wav",
          steps: "X           X   ".split('').map(step => step === 'X')
        }
      ]
    };

    const gabberBeat: Beat = {
      id: "gabber",
      bpm: 200,
      tracks: [
        {
          name: "Crash Cymbal",
          fileName: "gabber/crash.wav",
          steps: "                               X".split('').map(step => step === 'X')
        },
        {
          name: "Open HiHats",
          fileName: "gabber/open-hihat.wav",
          steps: "X X X X X X X X X X X X X X X X ".split('').map(step => step === 'X')
        },
        {
          name: "Clap",
          fileName: "gabber/clap.wav",
          steps: "X   X   X   X   X   X   X   X   ".split('').map(step => step === 'X')
        },
        {
          name: "Kick",
          fileName: "gabber/kick.wav",
          steps: "X   X   X   X   X   X   X   X   ".split('').map(step => step === 'X')
        }
      ]
    };

    const ebmBeat: Beat = {
      id: "ebm",
      bpm: 120,
      tracks: [
        {
          name: "Clap",
          fileName: "ebm/clap.wav",
          steps: [" ", " ", "X", " ", "X", " ", "X", " ", " ", " ", "X", " ", " ", " ", "X", "X", " ", " ", "X", "X", "X", "X", " ", " ", " ", "X", " ", "X", " ", " ", "X", " "]
            .map(step => step === 'X')
        },
        {
          name: "Open High-Hat",
          fileName: "ebm/open-hihat.wav",
          steps: [" ", " ", "X", " ", " ", " ", "X", " ", " ", " ", "X", " ", " ", " ", "X", " ", " ", " ", "X", " ", " ", " ", "X", " ", " ", " ", "X", " ", " ", " ", "X", " "]
            .map(step => step === 'X')
        },
        {
          name: "Closed High-Hat",
          fileName: "ebm/closed-hihat.wav",
          steps: ["X", "X", " ", " ", "X", "X", " ", " ", "X", "X", " ", " ", "X", "X", " ", " ", "X", "X", " ", " ", "X", "X", " ", " ", "X", "X", " ", " ", "X", "X", " ", " "]
            .map(step => step === 'X')
        },
        {
          name: "Snare",
          fileName: "ebm/snare.wav",
          steps: "    X       X       X       X XX".split('').map(step => step === 'X')
        },
        {
          name: "Kick",
          fileName: "ebm/kick.wav",
          steps: "X   X   X   X   X   X   X   X   ".split('').map(step => step === 'X')
        }
      ]
    };

    const dubBeat: Beat = {
      id: "dub",
      bpm: 140,
      tracks: [
        {
          name: "Kick",
          fileName: "dub/kick.wav",
          steps: "X_______X_______X_______X_______X_______X_______X_______X_______".split('').map(step => step === 'X')
        },
        {
          name: "Sub Bass",
          fileName: "dub/sub.wav",
          steps: ["X", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "X", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "X", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "X", " ", " ", " ", " ", " ", " ", " ", "X", " ", " ", " ", " ", " ", " ", " "]
            .map(step => step === 'X'),
        },
        {
          name: "Skank",
          fileName: "dub/skank.wav",
          steps: "____X_______X_______X_______X_______X_______X_______X_______X___".split('').map(step => step === 'X')
        },
        {
          name: "Snare",
          fileName: "dub/snare.wav",
          steps: [" ", " ", " ", " ", " ", " ", " ", " ", "X", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "X", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "X", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "X", " ", "X", " ", " ", " ", " ", " "]
            .map(step => step === 'X'),
        },
        {
          name: "Arpeggio",
          fileName: "dub/arpeggio_si.wav",
          steps: "____X_______X_______X_______X_______X_______X_______X_______X___".split('').map(step => step === 'X')
        },
        {
          name: "Closed Hat",
          fileName: "dub/closed-hat.wav",
          steps: [" ", " ", " ", " ", "X", " ", "X", " ", " ", " ", " ", " ", "X", " ", " ", " ", " ", " ", " ", " ", "X", "X", "X", " ", " ", " ", " ", " ", "X", " ", " ", " ", " ", " ", " ", " ", "X", " ", "X", " ", " ", " ", " ", " ", "X", "X", " ", " ", " ", " ", " ", " ", "X", " ", "X", " ", " ", " ", " ", " ", "X", " ", "X", "X"]
            .map(step => step === 'X'),
        },
        {
          name: "Bass",
          fileName: "dub/bass.wav",
          steps: "X                                         X                     ".split('').map(step => step === 'X')
        }
      ]
    };

    const blastBeat: Beat = {
      id: "blast-beat",
      bpm: 180,
      tracks: [
        {
          name: "Snare",
          fileName: "metal/snare.mp3",
          steps: "_X_X_X_X_X_X_X_X".split('').map(step => step === 'X')
        },
        {
          name: "Hats",
          fileName: "metal/hat.mp3",
          steps: "X_X_X_X_X_X_X_X_".split('').map(step => step === 'X')
        },
        {
          name: "Kick",
          fileName: "metal/kick.mp3",
          steps: "X_X_X_X_X_X_X_X_".split('').map(step => step === 'X')
        }
      ]
    };

    const breakcoreBeat: Beat = {
      id: "breakcore",
      bpm: 180,
      tracks: [
        {
          name: "Snare (accent)",
          fileName: "techno/snare.wav",
          steps: "    X        X  ".split('').map(step => step === 'X')
        },
        {
          name: "Snare (main)",
          fileName: "drum-n-bass/snare.wav",
          steps: "    X  X X   X  ".split('').map(step => step === 'X')
        },
        {
          name: "Hats",
          fileName: "techno/hat.wav",
          steps: "XXXXXXXXXXXXXXXX".split('').map(step => step === 'X')
        },
        {
          name: "Kick",
          fileName: "techno/kick.wav",
          steps: "X X       XX    ".split('').map(step => step === 'X')
        }
      ],
      //source: "https://onlinesequencer.net/2502318"
    };

    const drumAndBassBeat: Beat = {
      id: "drum-n-bass",
      bpm: 170,
      tracks: [
        {
          name: "Snare",
          fileName: "drum-n-bass/snare.wav",
          steps: "    X       X   ".split('').map(step => step === 'X')
        },
        {
          name: "Hats",
          fileName: "drum-n-bass/hat.wav",
          steps: "XXXXXXXXXXXXXXXX".split('').map(step => step === 'X')
        },
        {
          name: "Kick",
          fileName: "drum-n-bass/kick.wav",
          steps: "X         X     ".split('').map(step => step === 'X')
        }
      ]
    };

    const standardDancehallBeat: Beat = {
      id: "dancehall-standard",
      bpm: 105,
      tracks: [
        {
          name: "Hats",
          fileName: "techno/hat.wav",
          steps: "XXXXXXXXXXXXXXXX".split('').map(step => step === 'X')
        },
        {
          name: "Snare",
          fileName: "techno/snare.wav",
          steps: "      X       X ".split('').map(step => step === 'X')
        },
        {
          name: "Kick",
          fileName: "techno/kick.wav",
          steps: "X  X  X X  X  X ".split('').map(step => step === 'X')
        }
      ]
    };

    const reggaetonBeat: Beat = {
      id: "dancehall-reggaeton",
      bpm: 105,
      tracks: [
        {
          name: "Hats",
          fileName: "techno/hat.wav",
          steps: "XXXXXXXXXXXXXXXX".split('').map(step => step === 'X')
        },
        {
          name: "Snare",
          fileName: "techno/snare.wav",
          steps: "   X  X    X  X ".split('').map(step => step === 'X')
        },
        {
          name: "Kick",
          fileName: "techno/kick.wav",
          steps: "X   X   X   X   ".split('').map(step => step === 'X')
        }
      ]
    };

    const modernDancehallBeat: Beat = {
      id: "dancehall-modern",
      bpm: 105,
      tracks: [
        {
          name: "Hats",
          fileName: "techno/hat.wav",
          steps: "XXXXXXXXXXXXXXXX".split('').map(step => step === 'X')
        },
        {
          name: "Rim",
          fileName: "techno/snare.wav",
          steps: "   X  X     X   ".split('').map(step => step === 'X')
        },
        {
          name: "Kick",
          fileName: "techno/kick.wav",
          steps: "X         X     ".split('').map(step => step === 'X')
        }
      ]
    };


    const beats: Beat[] = [modernDancehallBeat, standardDancehallBeat, reggaetonBeat, drumAndBassBeat ,breakcoreBeat, blastBeat, dubBeat, ebmBeat, metalBeat, technoBeat, rockBeat, rockBeatVariation, psytranceBeat, offBeatTechnoClap, jerseyClubBeat, halfTimeGroove, garageTwoStep, gabberBeat];

    return {genres, beats};
  }
}
