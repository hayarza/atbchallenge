class SemanticVersion {
  constructor(strVersion) {
    const versionArray = strVersion.split(".");
    const hasPreReleaseVersion = versionArray[2].includes('-');
    function extractPatchVersion(versionArrayElement) {
      return versionArrayElement.substring(0, versionArrayElement.indexOf('-'));
    }
    function extractPreReleaseVersion(versionArrayElement) {
      return versionArrayElement.substring(versionArrayElement.indexOf('-') + 1, versionArrayElement.length);
    }
    this.majorVersion = versionArray[0];
    this.minorVersion = versionArray[1];
    this.patchVersion = hasPreReleaseVersion ? extractPatchVersion(versionArray[2]) : versionArray[2];
    this.preReleaseVersion = hasPreReleaseVersion ? extractPreReleaseVersion(versionArray[2]) : null;
  }
  getMajorVersion() {
    return this.majorVersion;
  }
  getMinorVersion() {
    return this.minorVersion;
  }
  getPatchVersion() {
    return this.patchVersion;
  }
  getPreReleaseVersion() {
    return this.preReleaseVersion;
  }
}

export default SemanticVersion;