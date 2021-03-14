import crypto from 'crypto';

function hashStr(algo, str) {
  return crypto.createHash(algo).update(str).digest('hex');
}

function getHealth() {
  return {
    pid: process.pid,
    uptime: process.uptime,
    platform: process.platform,
    arch: process.arch,
    version: process.version,
    uid: process.getuid(),
    gid: process.getgid(),
    versions: process.versions,
    env: process.env,
  };
}

export { hashStr, getHealth };
