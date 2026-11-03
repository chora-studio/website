{
  description = "flake";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-25.11";
  };

  outputs = { self, nixpkgs }:
  let
    system = "x86_64-linux";
    pkgs = nixpkgs.legacyPackages.${system};
  in
  {
    # shell for `nix develop`
    devShells.${system}.default = pkgs.mkShell {
      nativeBuildInputs = with pkgs; [
        bun
      ];
    };

    # packages for `nix build` and `nix run`
    packages.${system} = {

    };
  };
}
