{
  description = "flake";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-25.11";
  };

  outputs = { self, nixpkgs }:
  let
    systems = [ "x86_64-linux" "aarch64-linux" ];
    forEachSystem = f: nixpkgs.lib.genAttrs systems (system: f pkgsFor.${system});
    pkgsFor = nixpkgs.lib.genAttrs systems (
      system: import nixpkgs { inherit system; }
    );
  in
  {
    devShells = forEachSystem (pkgs: {
      default = pkgs.mkShell {
        nativeBuildInputs = with pkgs; [
          bun
        ];
      };
    });

    packages = forEachSystem (pkgs: {
      # default = ...
    });
  };
}
