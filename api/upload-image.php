<?php
// PHP script for image upload (place in your cPanel public_html folder)
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Configuration
$upload_dir = 'uploads/blog-images/';
$max_file_size = 5 * 1024 * 1024; // 5MB
$allowed_types = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];

// Create upload directory if it doesn't exist
if (!file_exists($upload_dir)) {
    mkdir($upload_dir, 0755, true);
}

try {
    if (!isset($_FILES['image'])) {
        throw new Exception('No image file uploaded');
    }

    $file = $_FILES['image'];
    
    // Validate file
    if ($file['error'] !== UPLOAD_ERR_OK) {
        throw new Exception('Upload error: ' . $file['error']);
    }
    
    if ($file['size'] > $max_file_size) {
        throw new Exception('File too large. Maximum size is 5MB');
    }
    
    if (!in_array($file['type'], $allowed_types)) {
        throw new Exception('Invalid file type. Only JPG, PNG, GIF, and WebP are allowed');
    }
    
    // Generate unique filename
    $extension = pathinfo($file['name'], PATHINFO_EXTENSION);
    $filename = uniqid('blog_', true) . '.' . $extension;
    $filepath = $upload_dir . $filename;
    
    // Move uploaded file
    if (!move_uploaded_file($file['tmp_name'], $filepath)) {
        throw new Exception('Failed to save uploaded file');
    }
    
    // Return success response
    $base_url = (isset($_SERVER['HTTPS']) ? 'https' : 'http') . '://' . $_SERVER['HTTP_HOST'];
    echo json_encode([
        'success' => true,
        'url' => $base_url . '/' . $filepath,
        'filename' => $filename,
        'size' => $file['size']
    ]);
    
} catch (Exception $e) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage()
    ]);
}
?>