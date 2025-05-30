function Git-Auto-Commit-Push() {
    $messages=@(
      "Update scripts",
        "Fix bugs",
        "Improve performance",
        "Add new features",
        "Refactor code",
        "Update documentation",
        "Clean up code",
        "Update dependencies",
        "Optimize assets",
        "Enhance security",
        "Improve UI/UX",
        "Update configuration"
    )
    $randomMessage = Get-Random -InputObject $messages
    git add .
    git commit -m "$randomMessage"

    $branchName = git rev-parse --abbrev-ref HEAD
    if (-not (git branch --list "origin/$branchName")) {
        git push --set-upstream origin $branchName
    }
    else {
        git push
    }
}