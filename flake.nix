{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
  };

  outputs = { self, nixpkgs }: {
    devShells.aarch64-darwin.default = let
      pkgs = nixpkgs.legacyPackages.aarch64-darwin;
    in pkgs.mkShell {
      packages = [
        pkgs.nodejs
        pkgs.process-compose
        pkgs.caddy
      ];
    };
  };
}