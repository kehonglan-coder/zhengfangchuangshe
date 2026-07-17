Add-Type -AssemblyName System.Drawing

$inputPath = 'public/images/logo-final.png'
$outputPath = 'public/images/logo-final.png'

$img = [System.Drawing.Image]::FromFile($inputPath)
$bmp = New-Object System.Drawing.Bitmap($img)

function Test-IsTransparentOrWhite($color) {
  if ($color.A -lt 10) { return $true }
  if (($color.R -gt 240) -and ($color.G -gt 240) -and ($color.B -gt 240)) { return $true }
  return $false
}

$width = $bmp.Width
$height = $bmp.Height
$top = 0
while ($top -lt $height) {
  $rowHasVisible = $false
  for ($x = 0; $x -lt $width; $x++) {
    $px = $bmp.GetPixel($x, $top)
    if (-not (Test-IsTransparentOrWhite $px)) {
      $rowHasVisible = $true
      break
    }
  }
  if ($rowHasVisible) { break }
  $top++
}

$bottom = $height - 1
while ($bottom -ge $top) {
  $rowHasVisible = $false
  for ($x = 0; $x -lt $width; $x++) {
    $px = $bmp.GetPixel($x, $bottom)
    if (-not (Test-IsTransparentOrWhite $px)) {
      $rowHasVisible = $true
      break
    }
  }
  if ($rowHasVisible) { break }
  $bottom--
}

$left = 0
while ($left -lt $width) {
  $colHasVisible = $false
  for ($y = $top; $y -le $bottom; $y++) {
    $px = $bmp.GetPixel($left, $y)
    if (-not (Test-IsTransparentOrWhite $px)) {
      $colHasVisible = $true
      break
    }
  }
  if ($colHasVisible) { break }
  $left++
}

$right = $width - 1
while ($right -ge $left) {
  $colHasVisible = $false
  for ($y = $top; $y -le $bottom; $y++) {
    $px = $bmp.GetPixel($right, $y)
    if (-not (Test-IsTransparentOrWhite $px)) {
      $colHasVisible = $true
      break
    }
  }
  if ($colHasVisible) { break }
  $right--
}

$newWidth = $right - $left + 1
$newHeight = $bottom - $top + 1
$cropped = New-Object System.Drawing.Bitmap($newWidth, $newHeight, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($cropped)
$rect = New-Object System.Drawing.Rectangle($left, $top, $newWidth, $newHeight)
$g.DrawImage($bmp, [System.Drawing.Rectangle]::Empty, $rect, [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()
$cropped.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
$img.Dispose()
$bmp.Dispose()
$cropped.Dispose()
Write-Host "trimmed to $newWidth x $newHeight"
