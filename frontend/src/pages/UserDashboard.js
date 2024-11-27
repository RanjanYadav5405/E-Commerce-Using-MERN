import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import SummaryApi from '../common'; // Adjust the path based on your folder structure
import { setUserDetails } from '../store/userSlice';

const UserDashboard = () => {
    const user = useSelector(state => state.user.user);
    const dispatch = useDispatch();
    const [name, setName] = useState(user?.name || '');
    const [email, setEmail] = useState(user?.email || '');
    const [profilePic, setProfilePic] = useState(null);
    const [profilePicURL, setProfilePicURL] = useState(user?.profilePic || '');

    useEffect(() => {
        if (profilePicURL) {
            const objectUrl = profilePicURL;
            return () => URL.revokeObjectURL(objectUrl);
        }
    }, [profilePicURL]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setProfilePic(file);
        if (file) {
            setProfilePicURL(URL.createObjectURL(file));
        }
    };

    // Define the handleProfileUpdate function
    const handleProfileUpdate = async (updatedProfileData) => {
        try {
            const formData = new FormData();
            formData.append('name', updatedProfileData.name);
            formData.append('email', updatedProfileData.email);
            if (profilePic) formData.append('profilePic', profilePic);
    
            const response = await fetch(SummaryApi.updateUser.url, {
                method: SummaryApi.updateUser.method,
                body: formData,
                credentials: 'include',
            });
    
            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
    
            const data = await response.json();
    
            if (data.success && data.user) {
                toast.success("Profile updated successfully!");
                dispatch(setUserDetails(data.user));
                localStorage.setItem('user', JSON.stringify(data.user));
                setProfilePicURL(data.user.profilePic || profilePicURL); // Fallback to existing profilePicURL if undefined
            } else {
                toast.success(data.message || "An error occurred while updating the profile.");

            }
        } catch (error) {
            toast.error(error.message || "Network error. Please try again later.");
        }
    };
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedProfileData = { name, email }; // Gather data from state
        handleProfileUpdate(updatedProfileData); // Call the profile update function
    };
    
    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6 text-center">User Dashboard</h2>
            <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium">Name</label>
                        <input 
                            type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            className="input input-bordered w-full mb-2"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Email</label>
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            className="input input-bordered w-full mb-2"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Profile Picture</label>
                        <input 
                            type="file" 
                            onChange={handleFileChange} 
                            className="file-input file-input-bordered w-full mb-2"
                        />
                        {profilePicURL && (
                            <img src={profilePicURL} alt="Profile" className="mt-2 w-24 h-24 rounded-full"/>
                        )}
                    </div>
                    <button type="submit" className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition duration-200 w-full mt-4">
                        Update Profile
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UserDashboard;
