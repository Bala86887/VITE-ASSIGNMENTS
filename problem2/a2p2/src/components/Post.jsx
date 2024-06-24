function Post({ avatar,first_name,last_name ,email}) {
  return (
    <div>
      <img src={avatar}/>
      <p>first_name : {first_name}</p>
      <p>last_name:{last_name}</p>
      <p>email:{email}</p>

    </div>
  );
}

export default Post;
